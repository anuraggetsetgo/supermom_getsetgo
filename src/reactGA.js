import ReactGA from "react-ga";
import {initFBPixel,fbpixel_track_Purchase,fbpixel_viewed_HomePage,fbpixel_clicked_JoinNow,fbpixel_clicked_Payment,fbpixel_payment_Success,fbpixel_payment_failed,fbpixel_appointment_scheduled} from './reactFBPixel'
//initReactGA,ga_viewed_HomePage,ga_clicked_JoinNow,ga_clicked_Payment,ga_payment_Success,ga_payment_failed,ga_appointment_scheduled

export function initReactGA() {
    ReactGA.initialize("UA-86957619-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview("/");
    ReactGA.pageview("/trynow");
    //ReactGA.pageview("/summary");
    initFBPixel();
}
export function ga_viewed_HomePage() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Viewed Homepage',
        value: 1,
    });
    fbpixel_viewed_HomePage();
}

export function ga_clicked_JoinNow() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Clicked join now',
        value: 2,
    });
    fbpixel_clicked_JoinNow();
}
export function ga_clicked_Payment() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Clicked Payment',
        value: 3,
    });
    fbpixel_clicked_Payment();
}
export function ga_payment_Success() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Payment Success',
        value: 5,
    });
    fbpixel_payment_Success();
}
export function ga_payment_failed() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Payment Failed',
        value: 4,
    });
    fbpixel_payment_failed()
}
export function ga_appointment_scheduled() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Scheduled Appointment',
        value: 6,
    });
    fbpixel_appointment_scheduled();
}
