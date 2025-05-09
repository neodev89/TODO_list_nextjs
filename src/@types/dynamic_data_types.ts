interface descriptionTechnologiesTypes {
    Reactjs: string;
    Nodejs: string;
    Sass: string;
    Bcrypt: string;
    UUID: string;
}

interface dataTypes {
    title: string;
    subtitle: string;
    start: string;
    technologies: Array<string>;
    description_technologies: descriptionTechnologiesTypes;
}

interface webApplicationTypes {
    id: string;
    name: string;
    data: dataTypes;
}

type dynamicData = {
    webApplication: webApplicationTypes;
}

export type { dynamicData };
