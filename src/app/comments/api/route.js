export async function GET() {
    return Response.json({
        comments
    }) ;
}


export async function POST(req) {
    const newComment = await req.json()
    comments.push({
        id: comments.length + 1,
        text : newComment.text
    }) ;

    return Response.json({
        message: "new Comment added",
        comments
    })

}






const comments = [
    {
        id : 1,
        text: " Nice and Attactive "
    },
    {
        id : 2,
        text: " Nice and Attactive "
    },
    {
        id : 3,
        text: " Nice and Attactive "
    },
]