
export function getSenderMsg(){
    return (dispatch) => {
        dispatch({ type: "Fetch_Sender_Msg", payload: getWelcomeMsg() })

    }
}

function getWelcomeMsg(){
    return [{contentOne:"Good Morning.",contentTwo:"Hope you're in for quick discussion today."},
    {contentOne:"Doctor as you know weight gain increases the risk of CVD by a significant amount of 12% Also, a gain of every 3kg nullifies the benefits of 1% reduction in A1c and every 1kg gain increases the risk of Heart failure by HUGE factor, 7.1% doctor,have a question for you",contentTwo:""},
    {contentOne:"Do you consider managing your patient's BMI important while treating Type 2 Diabetes?",contentTwo:""}];
}

export function getResponseForUserMsg(){
    return (dispatch) => {
        dispatch({ type: "Fetch_Response_Msg", payload: getResponseMsg() })
    }
}

function getResponseMsg(){
    return {

        userResponse:[{contentOne: "Yes"}],
        serverResponse:[{contentOne:"Indeed Several Studies have shown that Obesity is associtated with high risks of pre-diabetes and type2 diabetes"},{contentOne:"Tell me doctor, what is your goal while treating patients with Type2 diabetes? is your goal Glycemin control? or Weight loss? or Both?"}]
    }
}
