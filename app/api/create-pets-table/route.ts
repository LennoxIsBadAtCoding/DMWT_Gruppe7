import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request:Request) {

    const { searchParams } = new URL(request.url);
    const userName = searchParams.get('firstName');
    const userEmail = searchParams.get('eMail');
    const userComment = searchParams.get('userComment');
    try {
        let result =
            await sql`SELECT name FROM usercontact WHERE name = ${userName} AND email = ${userEmail};`;
        console.log(result);
        if(result.rowCount ==  0){
            result = await sql`INSERT INTO usercontact (name, email) VALUES (${userName}, ${userEmail});`;
            console.log(result);
        }
        result = await sql`INSERT INTO usercomment (userid, comment) VALUES (${userEmail}, ${userComment});`;
        console.log(result);
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
