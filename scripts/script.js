const exchangeRates = {
    usd: 1.07,
    gbp: 0.87,
    chf: 0.96,
    jpy: 161.79
};

function convertSWITCH() {
    let currency = document.wr.currency.value;
    let euroAmount = document.wr.euroAmount.value;
    let result;

    if (exchangeRates.hasOwnProperty(currency)) {
        switch (currency) {
            case "usd":
                result = parseFloat(euroAmount) * exchangeRates[currency];
                result = Math.round((result + Number.EPSILON) * 1000) / 1000
                document.wr.targetAmount.value = result + " USD";
                window.alert(euroAmount + " EUR = " + result + " USD");
                break;
            case "gbp":
                result = parseFloat(euroAmount) * exchangeRates[currency];
                result = Math.round((result + Number.EPSILON) * 1000) / 1000
                document.wr.targetAmount.value = result + " GBP";
                window.alert(euroAmount + " EUR = " + result + " GBP");
                break;
            case "chf":
                result = parseFloat(euroAmount) * exchangeRates[currency];
                result = Math.round((result + Number.EPSILON) * 1000) / 1000
                document.wr.targetAmount.value = result + " CHF";
                window.alert(euroAmount + " EUR = " + result + " CHF");
                break;
            case "jpy":
                result = parseFloat(euroAmount) * exchangeRates[currency];
                result = Math.round((result + Number.EPSILON) * 1000) / 1000
                document.wr.targetAmount.value = result + " JPY";
                window.alert(euroAmount + " EUR = " + result + " JPY");
                break;
        }
    }
}

function convertIF() {
    let currency = document.wr.currency.value;
    let euroAmount = document.wr.euroAmount.value;
    let result;

    if (exchangeRates.hasOwnProperty(currency)) {
        if (currency === "usd") {
            result = parseFloat(euroAmount) * exchangeRates[currency];
            result = Math.round((result + Number.EPSILON) * 1000) / 1000;
            document.wr.targetAmount.value = result + " USD";
            window.alert(euroAmount + " EUR = " + result + " USD");
        } else if (currency === "gbp") {
            result = parseFloat(euroAmount) * exchangeRates[currency];
            result = Math.round((result + Number.EPSILON) * 1000) / 1000;
            document.wr.targetAmount.value = result + " GBP";
            window.alert(euroAmount + " EUR = " + result + " GBP");
        } else if (currency === "chf") {
            result = parseFloat(euroAmount) * exchangeRates[currency];
            result = Math.round((result + Number.EPSILON) * 1000) / 1000;
            document.wr.targetAmount.value = result + " CHF";
            window.alert(euroAmount + " EUR = " + result + " CHF");
        } else if (currency === "jpy") {
            result = parseFloat(euroAmount) * exchangeRates[currency];
            result = Math.round((result + Number.EPSILON) * 1000) / 1000;
            document.wr.targetAmount.value = result + " JPY";
            window.alert(euroAmount + " EUR = " + result + " JPY");
        } else {
            document.wr.targetAmount.value = "Error";
        }
    }

}