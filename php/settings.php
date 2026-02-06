<link rel="stylesheet" href="/css/settings.css">
<img id="settingsButton" src="/images/settings.svg" onclick="settingsPage(this,1)" onmouseenter="settingsResize(this)" alt="Settings Button" title="Settings Button: Coming Soon">
<div id="settingsPage">
    <p style="margin-left:12px;margin-top:12px;margin-right: 24px;">
        This menu enables certain site functions, accessibility features, etc. 
        <br>
        <br>
        Any setting may be set, but if you would like that change to be persistent, hit the "checkbox"
        <br>
        <br>
        This will set a first-party cookie. You're in control of exactly which cookies you set.
        <br>
        <br>
        Un-checking a box removes the cookie :)
    </p>
    <input type="checkbox" id="scrollbarSettingCheckbox" name="scrollbarSetting" onclick="changeSetting(this)">
    <label for="scrollbarSetting" title="(Not actually implemented yet)">Enable Scrollbar (?)</label>
    <select id="scrollbarSettingDropdown" name="scrollbarSetting" onchange="changeSetting(this)">
        <option value="0">None</option>
        <option value="1">Typical</option>
        <option value="2">All</option>
    </select>
    <br>
    <input type="checkbox" id="animationSettingCheckbox" name="animationSetting" onclick="changeSetting(this)">
    <label for="animationSetting" title="(Not actually implemented yet)">Enable Animations (?)</label>
    <select id="animationSettingDropdown" name="animationSetting" onchange="changeSetting(this)">
        <option value="0">None</option>
        <option value="1">Reduced</option>
        <option value="2">All</option>
    </select>
    <br>
    <script src="../scripts/cookies.js"></script>
    <script src="../scripts/settings.js"></script>
</div>
<div id="pageDimmer">
</div>