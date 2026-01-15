import { FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const youtubeBlock = {
    className: 'youtube',
    icon: <FaYoutube />,
    backgroundIconColor: 'red',
    backgroundColor: '#ffa1a1',
    btnColor: 'red',
    undertitle: 'Youtube',
    hreftitle: 'Subscribe'
}

export const twitterBlock = {
    className: 'twitter',
    icon: <FaTwitter />,
    backgroundIconColor: '#3d8bff',
    backgroundColor: '#abcbfa',
    btnColor: '#3d8bff',
    undertitle: 'Twitteeer',
    hreftitle: 'Follow'
}

export const whatsappBlock = {
    className: 'whatsapp',
    icon: <FaWhatsapp />,
    backgroundIconColor: '#3dff67',
    backgroundColor: '#9efeb3',
    btnColor: '#3dff67',
    undertitle: 'Whatsapp',
    hreftitle: 'Send Message',
}


export const XTwitterBlock = {
    className: 'X',
    icon: <FaXTwitter />,
    backgroundIconColor: '#000000',
    backgroundColor: "#c8c8c8",
    btnColor: '#000000',
    undertitle: 'Ilon Mask?',
    hreftitle: 'Follow',
}