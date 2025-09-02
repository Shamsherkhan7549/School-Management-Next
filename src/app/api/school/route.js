import { pool } from '@/lib/db'
import cloudinary from '@/lib/cloudinary';
import fs from "fs/promises"
import path from 'path';
import os from "os";
import { NextResponse } from 'next/server';

// Get All Schools
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM school");
        return NextResponse.json({ success: true, message: "school retrieved successfully", schools: rows });
    } catch (error) {
        console.log("error in get : " + error)
        return NextResponse.json({ success: false, message: "Failed to retrieve school", data: [] });
    }
}

// Post new School
export async function POST(request) {
    try {

        const data = await request.formData();
        const file = data.get("image")
        if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

        // JSON info

        const schoolInfo = JSON.parse(data.get("schoolInfo")); // parse JSON string

        const { school_name, address, city, state, contact, email_id } = schoolInfo
        // Upload file to Cloudinary

        // Temp file using OS temp directory
        const buffer = Buffer.from(await file.arrayBuffer());
        const tempPath = path.join(os.tmpdir(), file.name); // <-- Cross-platform temp path
        await fs.writeFile(tempPath, buffer);

        const resultCloud = await cloudinary.uploader.upload(tempPath, {
            folder: "school_images",
        });

        const [result] = await pool.execute("INSERT INTO school (school_name, address, city, state, contact, email_id,image) VALUES(?,?,?,?,?,?,?)",
            [school_name, address, city, state, contact, email_id, resultCloud.secure_url]
        );

        return NextResponse.json({ success: true, message: "school added successfully", id: { id: result.insertId } });
    } catch (error) {
        console.log("error in post : " + error)
        return NextResponse.json({ success: false, message: "Failed to add school", data: {} });
    }
}