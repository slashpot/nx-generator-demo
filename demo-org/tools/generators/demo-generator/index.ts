import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
//original: import { libraryGenerator } from '@nrwl/workspace/generators';
import { applicationGenerator } from '@nrwl/next/src/generators/application/application';
import { Schema } from '@nrwl/next/src/generators/application/schema';

export default async function (tree: Tree, schema: Schema) {
  //original: await libraryGenerator(tree, { name: schema.name });
  await applicationGenerator(tree, schema);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}