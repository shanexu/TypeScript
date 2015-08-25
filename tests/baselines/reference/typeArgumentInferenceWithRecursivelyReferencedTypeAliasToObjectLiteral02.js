//// [typeArgumentInferenceWithRecursivelyReferencedTypeAliasToObjectLiteral02.ts]
type TreeNode = {
    name: string;
    parent: TreeNode;
}

type TreeNodeMiddleman = {
    name: string;
    parent: TreeNode;
}

var nodes: TreeNodeMiddleman[];
nodes.map(n => n.name);


//// [typeArgumentInferenceWithRecursivelyReferencedTypeAliasToObjectLiteral02.js]
var nodes;
nodes.map(function (n) { return n.name; });
