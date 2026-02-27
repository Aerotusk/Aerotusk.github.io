<link rel="stylesheet" href="/css/settings.css">
<img id="settingsButton" src="/images/settings.svg" onclick="settingsPage(this,1)" onmouseenter="growShrink(this)" alt="Settings Button" title="Settings Button: Coming Soon">
<div id="settingsPage">
    <p class="settingsText">
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
    <input class="setting" type="checkbox" id="scrollbarSettingCheckbox" name="scrollbarSetting" onclick="changeSetting(this)">
    <label class="settingLabel" for="scrollbarSettingCheckbox" title="(Not actually implemented yet)">Scrollbar (?)</label>
    <select id="scrollbarSettingDropdown" name="scrollbarSetting" onchange="changeSetting(this)">
        <option value="0">None</option>
        <option value="1">Typical</option>
        <option value="2">All</option>
    </select>
    <br>
    <input class="setting" type="checkbox" id="animationSettingCheckbox" name="animationSetting" onclick="changeSetting(this)">
    <label class="settingLabel" for="animationSettingCheckbox" title="(Not actually implemented yet)">Animations (?)</label>
    <select id="animationSettingDropdown" name="animationSetting" onchange="changeSetting(this)">
        <option value="0">None</option>
        <option value="1">Reduced</option>
        <option value="2">All</option>
    </select>
    <br>
    <input class="setting" type="checkbox" id="framerateSettingCheckbox" name="framerateSetting" onclick="changeSetting(this)">
    <label class="settingLabel" for="framerateSettingCheckbox" title="(Not actually implemented yet)">Max Framerate (?)</label>
    <select id="framerateSettingDropdown" name="framerateSetting" onchange="changeSetting(this)">
        <option value="0">1 FPS</option>
        <option value="1">30 FPS</option>
        <option value="2">60 FPS</option>
        <option value="3">Custom</option>
    </select>
    <br>
    <div class="settingsText" style="margins:auto;border:none">
        <p style="margins:auto;margin-top:18px;text-align:center"><a href="/accessibility/"> Accessibility Notice </a></p>
        <br>
        <p style="margins:auto;margin-top:8px;text-align:center">&copy; 2015-<?php echo date("Y");?>, All Rights Reserved</p>
    </div>
    <script src="../scripts/cookies.js"></script>
    <script src="../scripts/settings.js"></script>
</div>
<div id="pageDimmer">
</div>