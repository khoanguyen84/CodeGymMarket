class Helper{
    static formatCurrency(number){
        return (Number(number)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    }

    static saveLocalStorage(key, data){
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getLocalStorage(key){
        return JSON.parse(localStorage.getItem(key));
    }
}

export default Helper;