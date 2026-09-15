# HTYF Skills

[中文](#中文) | [English](#english)

## 中文

把已有小程序、应用、Taro 项目或 Godot 游戏迁移到红糖云服，并在源代码更新后继续增量迁移。此仓库独立维护 AI 的执行规则，不包含模型服务，也不代替 HTYF CLI。

## 安装到项目

需要 Node.js 18 或更新版本。将仓库克隆到待迁移项目之外，然后安装到源项目：

```sh
git clone https://github.com/htyf-mp-community/htyf-skills.git
cd htyf-skills
node scripts/install.mjs --project /absolute/path/to/source-project
```

安装器复制完整 skill 到 `<项目>/.agents/skills/htyf-migration`，包含规则、CLI 流程及代理配置。已有同名目录时会停止，避免覆盖本地修改。打开项目中的新 AI 会话，确认工具支持 Agent Skills 并发现 `htyf-migration`。

其他支持 Agent Skills 的工具可将 `skills/htyf-migration` 整个目录复制到其约定的技能目录；仅复制 `SKILL.md` 会丢失引用规则。

## 开始迁移

```text
使用 $htyf-migration，将当前项目全部功能迁移到 HTYF。
先盘点页面、交互、接口、资源、权限与异常状态，再从官方模板创建目标。
目标使用当前项目下的 HTYF/，保留源文件；逐项验证并报告缺口。
```

默认应用目标为 React Native；明确指定 Taro 时保留 Taro 多端开发方式；识别到 Godot 时使用游戏模板与规则要求的 Godot 版本。

```text
使用 $htyf-migration，将当前 Taro 项目迁移到 HTYF，明确使用 Taro 模板。
保留微信和 H5 行为，HTYF 适配使用 .htyf.* 和 htyf 配置。
```

```text
使用 $htyf-migration，按上次源代码基线增量迁移最新修改。
复用现有 HTYF 目标，检查新增、修改和删除功能，保留目标端适配。
```

## 执行与验收

AI 按功能清单完成模板初始化、逐项迁移、原生能力核对、胶囊与安全区适配、构建和真机验收。编译成功不等于迁移完成；不支持的原生能力和未完成真机检查必须写入报告。

迁移后的目标 `README.md` 提供中英文内容，开头会根据最终 HTYF 配置展示「预览、分享与使用 / Preview, Share and Use」：预览及分享链接、可扫描的二维码，以及安装红糖云服 App、扫码添加项目、打开并体验核心功能的步骤。增量迁移同步更新两种语言的内容；尚未部署或验证的入口会明确标注状态。

- [Skill 入口](skills/htyf-migration/SKILL.md)
- [红糖云服官网与 App 下载入口](https://mp.dagouzhi.com)
- [迁移规则](skills/htyf-migration/references/migration-rules.md)
- [CLI 非交互流程](skills/htyf-migration/references/cli-workflow.md)
- [详细使用说明](agents/README.md)
- [CLI 仓库](https://github.com/htyf-mp-community/htyf-cli)
- [Taro 编译链与模板](https://github.com/htyf-mp-community/htyf-taro)

在修改规则后运行 `npm test`，并确认所有相对文档链接有效。拆分来源见 [SPLIT_ORIGIN.md](SPLIT_ORIGIN.md)。

## English

Migrate existing mini-programs, applications, Taro projects, or Godot games to HTYF (红糖云服), and synchronize later source changes through incremental migrations. This repository maintains AI execution rules. It does not include a model service or replace the HTYF CLI.

### Install into a project

Requires Node.js 18 or later. Clone this repository outside the project you want to migrate, then install the skill into the source project:

```sh
git clone https://github.com/htyf-mp-community/htyf-skills.git
cd htyf-skills
node scripts/install.mjs --project /absolute/path/to/source-project
```

The installer copies the complete skill to `<project>/.agents/skills/htyf-migration`, including the rules, CLI workflow, and agent configuration. It stops if that directory already exists to preserve local changes. Open a new AI session in the project and confirm that your tool supports Agent Skills and discovers `htyf-migration`.

For other tools supporting Agent Skills, copy the entire `skills/htyf-migration` directory into the tool's designated skill directory. Copying only `SKILL.md` omits the referenced rules.

### Start a migration

```text
Use $htyf-migration to migrate every feature of the current project to HTYF.
Inventory pages, interactions, APIs, assets, permissions, and error states,
then create the target from the official template in this project's HTYF/ directory.
Preserve the source files, verify each feature, and report gaps.
```

Application targets default to React Native. Explicitly choosing Taro preserves its multi-platform development model. Detected Godot projects use the game template and the Godot version required by the migration rules.

```text
Use $htyf-migration to migrate the current Taro project to HTYF using the Taro template.
Preserve WeChat and H5 behavior. Use .htyf.* files and htyf configuration for HTYF adaptations.
```

```text
Use $htyf-migration to incrementally migrate the latest changes from the last source baseline.
Reuse the existing HTYF target, check added, changed, and removed features,
and preserve target-specific adaptations.
```

### Execution and acceptance

The AI follows a feature checklist to initialize the template, migrate features, audit native capabilities, adapt capsule and safe-area layouts, build, and verify on physical devices. Successful compilation alone does not complete a migration. Unsupported native capabilities and pending device checks must appear in the report.

The migrated target's `README.md` includes both Chinese and English. Its opening “预览、分享与使用 / Preview, Share and Use” section uses the final HTYF configuration to provide preview and share links, a scannable QR code, and steps to install the 红糖云服 App, scan to add the project, open it, and try its core features. Incremental migrations update both languages. Entries awaiting deployment or verification are clearly labeled.

- [Skill entry point](skills/htyf-migration/SKILL.md)
- [HTYF official website and App download entry](https://mp.dagouzhi.com)
- [Migration rules](skills/htyf-migration/references/migration-rules.md)
- [Non-interactive CLI workflow](skills/htyf-migration/references/cli-workflow.md)
- [Detailed usage guide (Chinese)](agents/README.md)
- [CLI repository](https://github.com/htyf-mp-community/htyf-cli)
- [Taro build tooling and templates](https://github.com/htyf-mp-community/htyf-taro)

After changing the rules, run `npm test` and verify all relative documentation links. See [SPLIT_ORIGIN.md](SPLIT_ORIGIN.md) for the extraction history.
