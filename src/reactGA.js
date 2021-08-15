import ReactGA from "react-ga";
//initReactGA,ga_viewed_HomePage,ga_clicked_JoinNow,ga_clicked_Payment,ga_payment_Success,ga_payment_failed,ga_appointment_scheduled
export function initReactGA() {
    ReactGA.initialize("UA-86957619-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview("/");
    ReactGA.pageview("/trynow");
    //ReactGA.pageview("/summary");
}
export function ga_viewed_HomePage() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Viewed Homepage',
        value: 1,
    });
}

export function ga_clicked_JoinNow() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Clicked join now',
        value: 2,
    });
}
export function ga_clicked_Payment() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Clicked Payment',
        value: 3,
    });
}
export function ga_payment_Success() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Payment Success',
        value: 5,
    });
}
export function ga_payment_failed() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Payment Failed',
        value: 4,
    });
}
export function ga_appointment_scheduled() {
    ReactGA.event({
        category: 'Promotion',
        action: 'Scheduled Appointment',
        value: 6,
    });
}
