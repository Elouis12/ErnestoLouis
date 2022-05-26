const getProjects = async () => {

    await fetch(

    `http://localhost:5000/`,
    {
            method: 'GET',
         }
    ).then(

        ( resp )=>{ return resp.json(); }

    ).then(

        ( data )=>{  addUser( data ); }

    ).catch( (e)=>{

        console.log(e);

    });

}

getProjects();