const INITIAL_STATE = {
   
    receivedWidgets:{
        data: [],
        error:null,
        loading: true
    },
    senderMsg:{
        data: [],
        error:null,
        loading: true
    },
    responseMsg:{
        data: [],
        error:null,
        loading: true
    },
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case 'Fetched_Widgets':
            return {
                ...state,
                receivedWidgets:{ 
                    data: action.payload,
                    error: null,
                    loading: false
            }
        }

        case 'Fetch_Sender_Msg':
            return {
                ...state,
                senderMsg:{ 
                    data: action.payload,
                    error: null,
                    loading: false
            }
        }
        case 'Fetch_Response_Msg':
            return {
                ...state,
                responseMsg:{ 
                    data: action.payload,
                    error: null,
                    loading: false
            }
            
        }
        
        default:
            return {
                ...state
        }
    }
}