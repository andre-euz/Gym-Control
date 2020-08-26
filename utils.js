module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || 
           (month == 0 && 
            today.getDate() < birthDate.getDate(timestamp))) {
            age -= 1; 
        }  
        return age;         
    },
    date: function(timestamp) {
        const date = new Date(timestamp);
        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return `${year}-${month}-${day}`;
    },
    blood: function(blood) {
        let currentBlood = blood == "A1"  ? "A+"
                         : blood == "A0"  ? "A-"
                         : blood == "B1"  ? "B+"
                         : blood == "B0"  ? "B-"
                         : blood == "AB1" ? "AB+"
                         : blood == "AB0" ? "AB-"
                         : blood == "O1"  ? "O-"
                         : blood == "O0"  ? "O+" : "";

        return currentBlood;            
    } 
}
