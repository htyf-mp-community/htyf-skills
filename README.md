# HTYF Skills

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

- [Skill 入口](skills/htyf-migration/SKILL.md)
- [迁移规则](skills/htyf-migration/references/migration-rules.md)
- [CLI 非交互流程](skills/htyf-migration/references/cli-workflow.md)
- [详细使用说明](agents/README.md)
- [CLI 仓库](https://github.com/htyf-mp-community/htyf-cli)
- [Taro 编译链与模板](https://github.com/htyf-mp-community/htyf-taro)

在修改规则后运行 `npm test`，并确认所有相对文档链接有效。拆分来源见 [SPLIT_ORIGIN.md](SPLIT_ORIGIN.md)。
