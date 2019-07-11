import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

const extension: JupyterFrontEndPlugin<void> = {
    id: '{{cookiecutter.name}}',
    autoStart: true,
    activate: (app: JupyterFrontEnd) => {
        console.log('JupyterLab extension {{cookiecutter.name}} is activated!');
    }
};

export default extension;
