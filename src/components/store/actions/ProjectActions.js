export const createProject = (project)=> {
    return (dispatch, getState) => {
        //make asyc call to database
        console.log('action', project);
        dispatch({type : 'CREATE_PROJECT', project});
    }
}
