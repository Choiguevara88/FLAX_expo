export const validateEmail = email => {
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9A-z]+\.[A-z]{0,3}$/;
    return regex.test(email);
}

export const validatePhone = phone => {
    const regex = /(01[016789])[-](\d{4}|\d{3})[-]\d{4}$/g;
    return regex.test(phone);
}

export const removeWhitespace = text => {
    const regex = /\s/g;
    return text.replace(regex, '');
}

export const phoneFormat = phone => {
    return phone.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-"); 
}

export const nickFormat = text => {
    const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
    return text.replace(regex, '');
}

export const randomNum = i => {
    let str = "";
    let i_  = 1;

    for(i_; i_ <= i; i_++) {
        str += Math.floor(Math.random() * 10);
    }

    return str;
}