import { TreeFormContext } from "../../../types/contexts";

export default function form(context: TreeFormContext): string {
  const { view, content, childNodes } = context;

  return `<div class="tree-form">
    <div class="tree-content">
      ${view}
      ${content ? `<div class="tree-node-content">${content}</div>` : ""}
      ${childNodes && childNodes.length ? `<div class="tree-node-children">${childNodes.join("")}</div>` : ""}
    </div>
  </div>`;
}
