import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request:Request) {

    const { searchParams } = new URL(request.url);
    const userName = searchParams.get('firstName');
    const userEmail = searchParams.get('eMail');
    const userComment = searchParams.get('userComment');
    try {
        let result =
            await sql`SELECT name FROM usercontact WHERE email = ${userEmail};`;
        if(result.rowCount ==  0){
            result = await sql`INSERT INTO usercontact (name, email) VALUES (${userName}, ${userEmail});`;
        }
        result = await sql`INSERT INTO usercomment (userid, comment) VALUES (${userEmail}, ${userComment});`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
