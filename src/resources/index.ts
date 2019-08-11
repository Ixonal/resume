import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./elements/common-header", {}), 
    PLATFORM.moduleName("./elements/common-section"), 
    PLATFORM.moduleName("./elements/education-list"),
    PLATFORM.moduleName("./elements/education"),
    PLATFORM.moduleName("./elements/personal-item-list"),
    PLATFORM.moduleName("./elements/personal-item"),
    PLATFORM.moduleName("./elements/proficiency-list"),
    PLATFORM.moduleName("./elements/proficiency"),
    PLATFORM.moduleName("./elements/reference-list"),
    PLATFORM.moduleName("./elements/reference"),
    PLATFORM.moduleName("./elements/work-history-list"),
    PLATFORM.moduleName("./elements/work-history"),

    PLATFORM.moduleName("./value-converters/AutoLinkValueConverter"),
    PLATFORM.moduleName("./value-converters/DateValueConverter"),
    PLATFORM.moduleName("./value-converters/PhoneValueConverter"), 
    PLATFORM.moduleName("./value-converters/SortByValueConverter"), 
    PLATFORM.moduleName("./value-converters/TakeValueConverter")
  ]);
}
