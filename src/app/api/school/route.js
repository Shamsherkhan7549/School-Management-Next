import {pool} from '@/lib/db'

// Get All Schools
export async function GET(){
    try{
        const [rows] = await pool.query("SELECT * FROM school");
        console.log(rows)
        return Response.json({success:true, message:"school retrieved successfully", data:rows});
    }catch(error){
        console.log("error in get : " + error)
        return Response.json({success:false, message:"Failed to retrieve school", data:[]});
    }
}

// Post new School
export async function POST(request){ 
    try{
        const data = await request.json();
        const [result] = await pool.query("INSERT INTO school SET ?", [data]);
        console.log(result)
        return Response.json({success:true, message:"school added successfully", data:{id:result.insertId}});
    }catch(error){
        console.log("error in post : " + error)
        return Response.json({success:false, message:"Failed to add school", data:{}});
    }
}