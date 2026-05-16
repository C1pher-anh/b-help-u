# vibecoding-helper

> 帮小白用户把模糊想法，变成可以直接交给 Cursor/Trae 开发的完整文档包。

---

## 这个 Skill 是干嘛的

**vibecoding-helper** 是一个三阶段引导流程，通过扮演不同角色的 Agent，陪伴没有产品和技术背景的用户，从一句"我想做一个东西"出发，一步步产出结构化的开发文档。

最终输出一个 `PRDS/` 文件夹，包含四份文档，可以直接丢给 Cursor 或 Trae 开始开发。

---

## 触发方式

在对话中说以下任意一类话，即可触发：

- "我想做一个产品"
- "帮我做一个工具"
- "我有个想法"
- "帮我 vibecoding"
- "帮我做个 app / 网页 / 工具"

---

## 三个阶段

```
阶段一：需求收集（Agent 1）
  → 通过聊天方式逐步挖掘用户需求
  → 输出：requirements.md

阶段二：PRD 梳理（Agent 2）
  → 把需求结构化为完整的产品文档
  → 输出：PRD.md

阶段三：UI + 技术架构（Agent 3）
  → 设计页面结构和技术选型
  → 输出：UI.md + tech.md

最终打包：
  PRDS/
  ├── requirements.md
  ├── PRD.md
  ├── UI.md
  └── tech.md
```

---

## 输出文档怎么用

文档生成后，按以下步骤交给 AI 编程工具开发：

1. 在 Cursor / Trae 中打开你的项目文件夹
2. 把整个 `PRDS/` 文件夹拖进去
3. 在 AI 对话框里说：「仔细阅读 PRDS 文件夹内的所有文档，告诉我你对这个项目的理解」
4. 确认 AI 理解无误后，开始开发

---

## 内置规则（不需要用户操心）

**用户画像记忆**
首次使用后自动生成 `assets/user-profile.md`，记录你的开发工具、技术基础和历史项目信息。下次使用时自动读取，不会反复问同样的问题。

**移动端预警**
如果你提到要做手机 App，Skill 会提前说明复杂性，并建议先做网页版验证想法。

**API Key 安全规范**
如果项目涉及调用 AI 大模型（OpenAI、Claude、DeepSeek 等），生成的文档会强制要求通过 UI 设置弹窗来管理 API Key，保存在 `localStorage`，**绝不硬编码在代码里**。

**对话节奏**
每次只问一个问题，不让新手用户应接不暇。

---

## 文件结构

```
vibecoding-helper/
├── SKILL.md                        # 主控调度逻辑
├── agents/
│   ├── agent1-requirements.md      # 需求收集 Agent
│   ├── agent2-prd.md               # PRD 梳理 Agent
│   └── agent3-design.md            # UI + 技术架构 Agent
├── assets/
│   └── user-profile-template.md   # 用户画像模板
└── references/
    └── tech-stack.md               # 技术栈参考（供 Agent 3 使用）
```

---

## 适合谁用

- 有想法但不知道怎么开始的非技术用户
- 用 Cursor / Trae 做独立开发的新手
- 想快速验证产品原型的人

---

*输出的所有文档，读者是 AI 编程工具，不是人类开发者。*
