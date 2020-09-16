import React, { Component } from 'react';
import Profile from '../../resources/images/profile.png';
import Voice from '../../resources/images/voice.png';
import Eye from '../../resources/images/eye.jpg';
import MessageBox from '../../components/MessageBox';
import Button from '../../components/Button';

import '../../resources/css/App.css';
import '../../resources/css/common.css';
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false,
      showMsg: false
    }
  }
  openSideNav() {

    document.getElementById("navigation").style.width = "250px";
  }
  showMsgSection(){
    this.setState({ showMsg: true });
    this.props.getSenderMsg();
  }
  getUserResponse(){
    this.setState({ ifYes: true });
    this.props.getResponseForUserMsg()
  }
  render() {
      
      let {senderMsgValue,responseForUserMsg} = this.props;
      console.log(responseForUserMsg,"12345678")
    return (
      <div>
        {/* HEADER SECTION START */}
        <header className="p-2">
          <div className="row m-0 headerBase d-flex" >

            <div className="headerContent" >
              <div className={this.state.showNav ? "headerContentDetails w-75" : "headerContentDetails"} id="navigation">
                <a href="javascript:void(0)" className={this.state.showNav ? "closebtn" : "d-none"} onClick={() => this.setState({ showNav: false })}  >&times;</a>
                <a href="#cases" className="menuItem"><i className="fa fa-plus-square pr-2"></i>Patient Cases</a>
                <a href="#vides" className="menuItem"><i className="fa fa-play pr-2"></i>KOL Videos</a>
                <a href="#guidelines" className="menuItem"><i className="fa fa-building pr-2"></i>Guidelines</a>
                <a href="#webcast" className="menuItem"><i className="fa fa-id-card-o pr-2"></i>Webcast</a>
                <a href="#resources" className="menuItem"><i className="fa fa-plus pr-2"></i>Patient Resources</a>
                <a href="#score" className="menuItem"><i className="fa fa-calculator pr-2"></i>My Score Card</a>
              </div>
              <a href="javascript:void(0);" className="icon" onClick={() => this.setState({ showNav: !this.state.showNav })}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <a><h3 className="text-center mb-0">MERCK</h3></a>
            <a className="profileCss">
              <img src={Profile} alt="Profile" title="profile icon" />
            </a>
          </div>
          {this.state.showNav &&
            <div className="blackDrop"></div>
          }
        </header>
        {/* HEADER SECTION END */}

        {/* CLINIC INFORMATION SECTION START */}
        <div className={(this.state.showNav || this.state.showMsg) ? "d-none" : "clinicSection w-75"}>
          <div className="clinicSectionInnerWrapper">
            <a href="javascript:void(0)" className="closebtn f-right" onClick={() => this.showMsgSection()}>&times;</a>
            <div className="clinicalInfo pt-5">
                <p className="white-bg clinicalInfoTitle p-2"><a>Weight gain</a> during T2DM is <a>clinically dangerous.</a></p>
                <div className="white-bg clinicalDetails p-2 mb-1">
                <img className="voiceImg d-block float-left" src={Eye}  alt="Eye" title="eye icon" />
                <p>Every BMI unit increase in the <a> 1st year of diabetes </a> increased CVD mortallty risk by <a>12%.</a></p>
                </div>
                <div className="white-bg clinicalDetails p-2 mb-1">
                <img className="voiceImg d-block float-left" src={Voice}  alt="Voice" title="voice icon" />
                <p>Every <a>3kg</a> gain offsets benifits of <a>1% A1c</a> reduction<sup>2</sup>.</p>
                </div>
                <div className="white-bg clinicalDetails p-2 mb-1">
                <img className="voiceImg d-block float-left" src={Eye}  alt="Eye" title="eye icon"  />
                <p>Every <a>1kg</a> weight gain leads to <a>7.1%</a> relative increase in risk of Heart failure<sup>3</sup>.</p>
                </div>
            </div>
          </div>
        </div>
        {/* CLINIC INFORMATION SECTION END */}

        {/* MSG SECTION START */}
        <div className={this.state.showMsg ? "messageWindow" : "d-none"}>
            <div className="messageWindowWrapper py-3 px-4">
                <div className="senderMessagebox">
                    <div className="messageContainer">
                        {senderMsgValue.data.length > 0 && senderMsgValue.data.map((msg,i) =>
                        <MessageBox
                            key = {i}
                            contentOne={msg.contentOne}
                            contentTwo={msg.contentTwo}
                        />
                        )}
                    </div>
                    <div className="d-flex justify-content-between pt-2 buttonWrapper">
                        <Button
                            title="Yes"
                            onClick={() => this.getUserResponse()}
                        />
                        <Button
                            title="No"
                            onClick={() => this.setState({ showNav: true })}
                        />
                        <Button
                            title="Maybe"
                        />
                    </div>
                </div>
                <div className={(this.state.ifYes && !this.state.showNav) ? 'd-block': 'd-none'}>
                    <div className="receiverMessageBox my-3">
                        <div className="messageContainer">
                        {responseForUserMsg.data.userResponse && responseForUserMsg.data.userResponse.map((msg,i)=>
                        <MessageBox
                        key = {i}
                        className="receiverBox"
                        contentOne={msg.contentOne}
                        />
                        )}
                            
                        </div>
                    </div>
                    <div className="senderMessagebox">
                        <div className="messageContainer">
                        {responseForUserMsg.data.serverResponse && responseForUserMsg.data.serverResponse.map((msg,i)=>
                            <MessageBox
                            key = {i}
                            contentOne={msg.contentOne}
                        />
                        )}
                        
                        </div>
                        <div className="d-flex pt-2 buttonWrapper my-2">
                            <Button title="Glycermic Control" />
                        </div>
                        <div className="d-flex pt-2 buttonWrapper">
                            <Button
                                title="Weight Loss"
                                className="mr-2"
                            />
                            <Button title="Both" />
                        </div>
                    </div>
                </div>
            </div>
          <div className={this.state.showNav ? 'd-none' : "d-flex messageInputWrapper border-50"}>
            <input type="text" className="form-control border-50" />
            <img className="voiceImg pl-2" src={Voice} alt="Voice" title="voice icon" />
            </div>
        </div>
        {/* MSG SECTION END */}

        {/* INPUT SECTION START */}
       
        {/* MSG SECTION END */}
      </div>
    );
  }
}

export default IndexPage;
