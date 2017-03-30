import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    "./elements/common-header",
    "./elements/education",
    "./elements/education-list",
    "./elements/personal-item",
    "./elements/personal-item-list",
    "./elements/proficiency",
    "./elements/proficiency-list",
    "./elements/reference",
    "./elements/reference-list",
    "./elements/work-history",
    "./elements/work-history-list",
    "./elements/common-section",

    "./value-converters/AutoLinkValueConverter",
    "./value-converters/DateValueConverter",
    "./value-converters/PhoneValueConverter",
    "./value-converters/SortByValueConverter"
  ]);
}
