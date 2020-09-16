import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../screens/HomePage/index.js';
import {getSenderMsg,getResponseForUserMsg} from '../redux/actions/indexPage'

const mapStateToProps = (state) => {
    return ({
        senderMsgValue: state.indexPage.senderMsg,
        responseForUserMsg: state.indexPage.responseMsg
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        "getSenderMsg":getSenderMsg,
        "getResponseForUserMsg":getResponseForUserMsg
    },dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps) (IndexPage);




