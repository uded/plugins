import { dirname } from 'path';
import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyBabelPresetOpts(opts => {
    return {
      ...opts,
      import: (opts.import || []).concat([
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
      ]),
    };
  });

  api.addProjectFirstLibraries(() => [
    {
      name: 'antd',
      path: dirname(require.resolve('antd/package.json')),
    },
  ]);
};
