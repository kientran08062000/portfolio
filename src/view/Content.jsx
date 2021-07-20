import { react, useState } from "react";
import imageContent from '../assets/meditationbw1.svg';
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import '../view/Content.css'


const BootstrapButton = withStyles({
    root: {
      height: 48,
      marginTop: 40,
      width: 182,
      boxShadow: 'none',
      textTransform: 'none',
      color: "#fff",
      fontSize: 16,
      padding: '16px 32px',
      backgroundColor: '#6002EE',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        boxShadow: '0px 32px 64px -24px rgba(51, 54, 60, 0.15);',
        backgroundColor: '#6002EE'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#6002EE'
      },
    },
  })(Button);
const ContentSection1 = () => { 
    return  (
            <div className="section1">
                <div className="content-text">   
                    <p className="content-helloworld">
                        Hello World,
                    </p>
                    <h1>
                        I'm Kien Tran 
                    </h1>
                    <p className="content-SE">
                        Software Engineer.
                    </p>
                    <p className="content-UID">
                        UI Designer.
                    </p>
                    <p className="content-welcome">
                        Welcome to my area. Enjoy your time!
                    </p> 
                    <BootstrapButton className="btn btn--white btn--animated" variant="contained">View portfolio</BootstrapButton>
                </div>

                <div className="image">
                    <img className="image-content" src={imageContent} alt="image content" />
                </div>   
            </div>
        );
};

export default ContentSection1; 