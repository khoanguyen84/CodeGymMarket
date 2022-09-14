class Helper{
    static formatCurrency(number){
        return (Number(number)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    }
}

export default Helper;