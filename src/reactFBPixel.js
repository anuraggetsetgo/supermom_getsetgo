import ReactPixel from "react-facebook-pixel";
//initFBPixel,fbpixel_track_Purchase,fbpixel_viewed_HomePage,fbpixel_clicked_JoinNow,fbpixel_clicked_Payment,fbpixel_payment_Success,ga_payment_failed,ga_appointment_scheduled

const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
};


export function initFBPixel() {
    ReactPixel.init("531282234844998", options);
    ReactPixel.pageView(); // For tracking page view
    //ReactPixel.track('Lead','Anurag')
    //ReactPixel.track( 'Purchase', {currency: "USD", value: 30.00});

}
export function fbpixel_track_Purchase(curr) {
    ReactPixel.track("Purchase", { currency: curr });
}
export function fbpixel_viewed_HomePage() {
    ReactPixel.trackCustom('Promotion', { action: 'Viewed Homepage', value: 1 })
}

export function fbpixel_clicked_JoinNow() {
    ReactPixel.trackCustom('Promotion', { action: 'Clicked join now', value: 2 })
}
export function fbpixel_clicked_Payment() {
    ReactPixel.trackCustom('Promotion', { action: 'Clicked Payment', value: 3 })
}
export function fbpixel_payment_Success() {
    ReactPixel.trackCustom('Promotion', { action: 'Payment Success', value: 5 })
}
export function fbpixel_payment_failed() {
    ReactPixel.trackCustom('Promotion', { action: 'Payment Failed', value: 4 })
}
export function fbpixel_appointment_scheduled() {
    ReactPixel.trackCustom('Promotion', { action: 'Scheduled Appointment', value: 6 })
}
