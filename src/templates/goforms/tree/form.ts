interface TreeFormContext {
  node: {
    isRoot: boolean;
  };
  view: string;
  content?: string;
  childNodes?: string[];
}

export default (ctx: TreeFormContext) => `
  ${
    ctx.node.isRoot
      ? `
    <div class="ui relaxed list">
      <div class="item" ref="root" role="listitem">
        ${ctx.view}
      </div>
    </div>
  `
      : `
    <div ref="node" class="item tree__level" role="listitem">
      ${
        ctx.content
          ? `
      <div ref="content" class="tree__node-content content">
        ${ctx.content}
      </div>
      `
          : ""
      }
      ${
        ctx.childNodes && ctx.childNodes.length
          ? `
      <div ref="childNodes" class="tree__node-children list" role="list">
        ${ctx.childNodes.join("")}
      </div>
      `
          : ""
      }
    </div>
  `
  }
`;
