
// update
export async function PATCH( req,{params}) {

    const body = await req.json()
    const index = comments.findIndex( (c) => c.id === parseInt(params.id) );
    comments[index] = {
        text : body.text
    }

    return Response.json({
        message : "comment updated",
        comments
    }) ;
}


// Delete
export async function DELETE( req ,{params}) {
    const newComments = comments.filter( (c) => c.id !== parseInt(params.id) )
    return Response.json({
        message: "Commente Deleted",
        newComments
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
        text: " Nice and Attractive "
    },
]