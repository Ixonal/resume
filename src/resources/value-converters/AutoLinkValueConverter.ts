
const linkRecognitionReg = /\[(http[^\]]+)\]/gim;

export class AutoLinkValueConverter {
  toView(value: string) {
    return value.replace(linkRecognitionReg, `<a href="$1" target="_blank">$1</a>`);
  }
}
