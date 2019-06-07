const initState = {
    projects : [
        {id :1, title : "Add Todo", content : 'This is add todo project'},
        {id :2, title : "Redux Basic", content : 'This is redux basic project'},
        {id :3, title : "Redux Details", content : 'This is redux details project'}
    ]
}

const projectReducer = (state=initState, action )=> {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            let newstate = {
                id : Math.random(),
                title : action.project.title,
                content : action.project.content,
            }
            newstate = [...state.projects, newstate]

            return {
                ...state,
                projects : newstate
            };
        default : 
            return state
            
    }
}

export default projectReducer;