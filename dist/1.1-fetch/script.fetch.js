var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const catchRainbowWithFetch = () => {
    fetch('./rainbow-weather.jpeg')
        .then((response) => {
        return response.blob();
    })
        .then((blob) => {
        const urlFromBlob = URL.createObjectURL(blob);
        const image = document.getElementById('rainbow2');
        image.src = urlFromBlob;
    })
        .catch((error) => {
        console.error(error);
    });
};
const catchRainbowWithAsyncAwait = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch('./rainbow-weather.jpeg');
    const blob = yield response.blob();
    const urlFromBlob = URL.createObjectURL(blob);
    const image = document.getElementById('rainbow2');
    image.src = urlFromBlob;
});
const getTextFromTxtWithFetch = () => {
    const paragraph = document.getElementById('paragraphTxt1');
    fetch('./text.txt')
        .then((response) => {
        return response.text();
    })
        .then(text => {
        paragraph.innerHTML = text;
    });
};
const getTextFromTxtWithAsyncAwait = () => __awaiter(this, void 0, void 0, function* () {
    const paragraph = document.getElementById('paragraphTxt2');
    const response = yield fetch('./text.txt');
    const text = yield response.text();
    paragraph.innerHTML = text;
});
getTextFromTxtWithAsyncAwait();
getTextFromTxtWithFetch();
catchRainbowWithAsyncAwait();
catchRainbowWithFetch();
