// const commonStyles = `
//   body {
//     font-family: "Input Mono", "DejaVu Sans Mono", DejaVu, Arial, sans-serif;
//     font-size: 12pt;
//   }
//
//   #sk_keystroke kbd {
//     font-family: "Sudo Nerd Font Mono", "Sudo Mono", "Sudo",
//       "Input Mono Nerd Font", "Input Mono", "DejaVu Sans Mono", "DejaVu", "Arial",
//       sans-serif;
//     font-size: 10pt;
//   }
//
//   #sk_omnibarSearchArea {
//     margin: 0 !important;
//     padding: 0.5rem 1rem !important;
//     border-bottom: none !important;
//   }
//
//   #sk_omnibarSearchResult {
//     margin: 0 !important;
//   }
//
//   #sk_omnibar li {
//     background: none !important;
//     padding: 0.35rem 0.5rem !important;
//   }
//
//   #sk_omnibarSearchResult > ul:nth-child(1) {
//     margin-bottom: 0px !important;
//     padding: 0 !important;
//     padding-bottom: 10px !important;
//   }
//
//   #sk_omnibar .separator {
//     padding-left: 8px !important;
//   }
//
//   /* Disable RichHints CSS animation */
//   .expandRichHints {
//     animation: none;
//   }
//   .collapseRichHints {
//     animation: none;
//   }
// `;
//
// const lightTheme = `
//   body {
//     color: #483270;
//   }
//
//   #sk_omnibar {
//     background-color: #f5f3fd !important;
//     color: #59446f !important;
//     box-shadow: 0px 3px 15px -6px rgba(53, 13, 81, 0.7) !important;
//   }
//
//   #sk_omnibar .prompt {
//     color: #c2b2d7 !important;
//   }
//
//   #sk_omnibar .separator {
//     color: #d4b1ff !important;
//   }
//
//   #sk_omnibar input {
//     color: #351d53 !important;
//   }
//
//   #sk_omnibarSearchResult {
//     border-top: 1px solid #e1cff5 !important;
//   }
//
//   #sk_omnibar li.focused {
//     background-color: #e1ddff !important;
//     color: #351d53 !important;
//   }
//
//   #sk_banner,
//   #sk_keystroke {
//     border: 1px solid #d7b0ff;
//     background: #e9d9ee;
//   }
//
//   #sk_keystroke .annotation {
//     color: #483270;
//   }
//
//   #sk_keystroke kbd {
//     color: black;
//     background: white;
//   }
//
//   #sk_keystroke kbd .candidates {
//     color: #ff7a75;
//   }
// `;
//
// const darkTheme = `
//   body {
//     color: #d7b0ff;
//   }
//
//   #sk_omnibar {
//     background-color: #2a323e;
//     color: #cad1d7;
//   }
//
//   #sk_omnibar .prompt {
//     color: #eef5fb !important;
//   }
//
//   #sk_omnibar .separator {
//     color: #8af4ff !important;
//     padding-left: 8px !important;
//   }
//
//   #sk_omnibar input {
//     color: white !important;
//   }
//
//   #sk_omnibarSearchResult {
//     border-top: 1px solid #545f6f !important;
//   }
//
//   #sk_omnibar li.focused {
//     background: #181d24 !important;
//     color: #eef5fb !important;
//   }
//
//   #sk_banner,
//   #sk_keystroke {
//     border: 1px solid #d7b0ff;
//     background: #483270;
//   }
//
//   #sk_keystroke .annotation {
//     color: #d7b0ff;
//   }
//
//   #sk_keystroke kbd {
//     color: #fff;
//     background: #7a57a4;
//     border: 1px solid #2d0080;
//     box-shadow: none;
//   }
//
//   #sk_keystroke kbd .candidates {
//     color: #ff8cf8;
//   }
// `;
//
// const isDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//
// export default commonStyles + (isDarkMode ? darkTheme : lightTheme);
//

import api from "./api.js"

// api.Hints.style('border: solid 1px #3D3E3E; color:#F92660; background: initial; background-color: #272822; font-family: Maple Mono Freeze; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);');
// api.Hints.style("border: solid 1px #3D3E3E !important; padding: 1px !important; color: #A6E22E !important; background: #272822 !important; font-family: Maple Mono Freeze !important; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8) !important;", "text");
// api.Visual.style('marks', 'background-color: #A6E22E99;');
// api.Visual.style('cursor', 'background-color: #F92660;');

api.Hints.style('border: solid 1px #45475a; color:#f38ba8; background: initial; background-color: #313244; font-family: SF Pro Display; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);');
api.Hints.style("border: solid 1px #45475a !important; padding: 1px !important; color: #a6e3a1 !important; background: #313244 !important; font-family: SF Pro Display !important; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8) !important;", "text");
api.Visual.style('marks', 'background-color: #a6e3a199;');
api.Visual.style('cursor', 'background-color: #f38ba8;');

/* set theme */
const monokaiTheme = `
.sk_theme {
    font-family: SF Pro Display,Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #282828;
    color: #ebdbb2;
}
.sk_theme tbody {
    color: #b8bb26;
}
.sk_theme input {
    color: #d9dce0;
}
.sk_theme .url {
    color: #38971a;
}
.sk_theme .annotation {
    color: #b16286;
}

#sk_omnibar {
    width: 60%;
    left:20%;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
}

.sk_omnibar_middle {
	top: 15%;
	border-radius: 10px;
}


.sk_theme .omnibar_highlight {
    color: #ebdbb2;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #282828;
}

.sk_theme #sk_omnibarSearchResult {
    max-height: 60vh;
    overflow: hidden;
    margin: 0rem 0rem;
}



#sk_omnibarSearchResult > ul {
	padding: 1.0em;
}

.sk_theme #sk_omnibarSearchResult ul li {
    margin-block: 0.5rem;
    padding-left: 0.4rem;
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
	background: #181818;
	border-color: #181818;
	border-radius: 12px;
	position: relative;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
}


#sk_omnibarSearchArea > input {
	display: inline-block;
	width: 100%;
	flex: 1;
	font-size: 20px;
	margin-bottom: 0;
	padding: 0px 0px 0px 0.5rem;
	background: transparent;
	border-style: none;
	outline: none;
	padding-left: 18px;
}


#sk_tabs {
	position: fixed;
	top: 0;
	left: 0;
    background-color: rgba(0, 0, 0, 0);
	overflow: auto;
	z-index: 2147483000;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
	margin-left: 1rem;
	margin-top: 1.5rem;
    border: solid 1px #282828;
    border-radius: 15px;
    background-color: #282828;
    padding-top: 10px;
    padding-bottom: 10px;

}

#sk_tabs div.sk_tab {
	vertical-align: bottom;
	justify-items: center;
	border-radius: 0px;
    background: #282828;
    //background: #181818 !important;

	margin: 0px;
	box-shadow: 0px 0px 0px 0px rgba(245, 245, 0, 0.3);
	box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.8) !important;

	/* padding-top: 2px; */
	border-top: solid 0px black;
	margin-block: 0rem;
}


#sk_tabs div.sk_tab:not(:has(.sk_tab_hint)) {
	background-color: #181818 !important;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8) !important;
	border: 1px solid #181818;
	border-radius: 20px;
	position: relative;
	z-index: 1;
	margin-left: 1.8rem;
	padding-left: 0rem;
	margin-right: 0.7rem;
}


#sk_tabs div.sk_tab_title {
	display: inline-block;
	vertical-align: middle;
	font-size: 10pt;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 5px;
	color: #ebdbb2;
}



#sk_tabs.vertical div.sk_tab_hint {
    position: inherit;
    left: 8pt;
    margin-top: 3px;
    border: solid 1px #3D3E3E; color:#F92660; background: initial; background-color: #272822; font-family: Maple Mono Freeze;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
}

#sk_tabs.vertical div.sk_tab_wrap {
	display: inline-block;
	margin-left: 0pt;
	margin-top: 0px;
	padding-left: 15px;
}

#sk_tabs.vertical div.sk_tab_title {
	min-width: 100pt;
	max-width: 20vw;
}

#sk_usage, #sk_popup, #sk_editor {
	overflow: auto;
	position: fixed;
	width: 80%;
	max-height: 80%;
	top: 10%;
	left: 10%;
	text-align: left;
	box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
	z-index: 2147483298;
	padding: 1rem;
	border: 1px solid #282828;
	border-radius: 10px;
}

#sk_keystroke {
	padding: 6px;
	position: fixed;
	float: right;
	bottom: 0px;
	z-index: 2147483000;
	right: 0px;
	background: #282828;
	color: #fff;
	border: 1px solid #181818;
	border-radius: 10px;
	margin-bottom: 1rem;
	margin-right: 1rem;
	box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
}

#sk_status {
	position: fixed;
	/* top: 0; */
	bottom: 0;
	right: 39%;
	z-index: 2147483000;
	padding: 8px 8px 4px 8px;
	border-radius: 5px;
	border: 1px solid #282828;
	font-size: 12px;
	box-shadow: 0px 20px 40px 2px rgba(0, 0, 0, 1);
	/* margin-bottom: 1rem; */
	width: 20%;
	margin-bottom: 1rem;
}


#sk_omnibarSearchArea {
    border-bottom: 0px solid #282828;
}


#sk_omnibarSearchArea .resultPage {
	display: inline-block;
    font-size: 12pt;
    font-style: italic;
	width: auto;
}

#sk_omnibarSearchResult li div.url {
	font-weight: normal;
	white-space: nowrap;
	color: #aaa;
}

.sk_theme .omnibar_highlight {
	color: #11eb11;
	font-weight: bold;
}

.sk_theme .omnibar_folder {
	border: 1px solid #188888;
	border-radius: 5px;
	background: #188888;
	color: #aaa;
	box-shadow: 1px 1px 5px rgba(0, 8, 8, 1);
}
.sk_theme .omnibar_timestamp {
	background: #cc4b9c;
	border: 1px solid #cc4b9c;
	border-radius: 5px;
	color: #aaa;
	box-shadow: 1px 1px 5px rgb(0, 8, 8);
}
#sk_omnibarSearchResult li div.title {
	text-align: left;
	max-width: 100%;
	white-space: nowrap;
	overflow: auto;
}

.sk_theme .separator {
	color: #282828;
}

.sk_theme .prompt{
	color: #aaa;
	background-color: #181818;
	border-radius: 10px;
	padding-left: 22px;
	padding-right: 21px;
	/* padding: ; */
	font-weight: bold;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
}



#sk_status, #sk_find {
	font-size: 10pt;
	font-weight: bold;
    text-align: center;
    padding-right: 8px;
}


#sk_status span[style*="border-right: 1px solid rgb(153, 153, 153);"] {
    display: none;
}

`;


 const catppuccinMochaTheme = `
 :root {
     /* Catppuccin Mocha colors */
     --theme-ace-bg: #1e1e2eab;
     --theme-ace-bg-accent: #313244;
     --theme-ace-fg: #cdd6f4;
     --theme-ace-fg-accent: #a6adc8;
     --theme-ace-cursor: #f5e0dc;
     --theme-ace-select: #89b4fa;
 }
 #sk_editor {
     height: 50% !important;
     background: var(--theme-ace-bg) !important;
 }
 .ace_dialog-bottom{
     border-top: 1px solid var(--theme-ace-bg) !important;
 }
 .ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
     background: var(--theme-ace-bg-accent) !important;
 }
 .ace-chrome{
     color: var(--theme-ace-fg) !important;
 }
 .ace_gutter, .ace_dialog {
     color: var(--theme-ace-fg-accent) !important;
 }
 .ace_cursor{
     color: var(--theme-ace-cursor) !important;
 }
 .normal-mode .ace_cursor{
     background-color: var(--theme-ace-cursor) !important;
     border: var(--theme-ace-cursor) !important;
 }
 .ace_marker-layer .ace_selection {
     background: var(--theme-ace-select) !important;
 }

 .sk_theme {
     font-family: Maple Mono Freeze,Input Sans Condensed, Charcoal, sans-serif;
     font-size: 10pt;
     /* Base */
     background: #1e1e2e;
     /* Text */
     color: #cdd6f4;
 }

 .sk_theme tbody {
     /* Green */
     color: #a6e3a1;
 }

 .sk_theme input {
     /* Text */
     color: #cdd6f4;
 }

 .sk_theme .url {
     /* Sapphire */
     color: #74c7ec;
 }

 .sk_theme .annotation {
     /* Mauve */
     color: #cba6f7;
 }


 #sk_omnibar {
     width: 60%;
     left:20%;
     box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
 }


 .sk_omnibar_middle {
 	top: 15%;
 	border-radius: 10px;
 }



 .sk_theme .omnibar_highlight {
     /* Text */
     color: #cdd6f4;
 }

 .sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
     /* Base */
     background: #1e1e2e;
 }


 .sk_theme #sk_omnibarSearchResult {
     max-height: 60vh;
     overflow: hidden;
     margin: 0rem 0rem;
 }




 #sk_omnibarSearchResult > ul {
 	padding: 1.0em;
 }


 .sk_theme #sk_omnibarSearchResult ul li {
     margin-block: 0.5rem;
     padding-left: 0.4rem;
 }


 .sk_theme #sk_omnibarSearchResult ul li.focused {
 	/* Mantle */
 	background: #181825;
 	border-color: #181825;
 	border-radius: 12px;
 	position: relative;
 	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
 }



 #sk_omnibarSearchArea > input {
 	display: inline-block;
 	width: 100%;
 	flex: 1;
 	font-size: 20px;
 	margin-bottom: 0;
 	padding: 0px 0px 0px 0.5rem;
 	background: transparent;
 	border-style: none;
 	outline: none;
 	padding-left: 18px;
 }



 #sk_tabs {
 	position: fixed;
 	top: 0;
 	left: 0;
     background-color: rgba(0, 0, 0, 0);
 	overflow: auto;
 	z-index: 2147483000;
     box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
 	margin-left: 1rem;
 	margin-top: 1.5rem;
     /* Base */
     border: solid 1px #1e1e2e;
     border-radius: 15px;
     /* Base */
     background-color: #1e1e2e;
     padding-top: 10px;
     padding-bottom: 10px;


 }


 #sk_tabs div.sk_tab {
 	vertical-align: bottom;
 	justify-items: center;
 	border-radius: 0px;
     /* Base */
     background: #1e1e2e;
     //background: #181818 !important;


 	margin: 0px;
 	box-shadow: 0px 0px 0px 0px rgba(245, 245, 0, 0.3);
 	box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.8) !important;


 	/* padding-top: 2px; */
 	border-top: solid 0px black;
 	margin-block: 0rem;
 }



 #sk_tabs div.sk_tab:not(:has(.sk_tab_hint)) {
 	/* Mantle */
 	background-color: #181825 !important;
 	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8) !important;
 	border: 1px solid #181825;
 	border-radius: 20px;
 	position: relative;
 	z-index: 1;
 	margin-left: 1.8rem;
 	padding-left: 0rem;
 	margin-right: 0.7rem;
 }



 #sk_tabs div.sk_tab_title {
 	display: inline-block;
 	vertical-align: middle;
 	font-size: 10pt;
 	white-space: nowrap;
 	text-overflow: ellipsis;
 	overflow: hidden;
 	padding-left: 5px;
 	/* Text */
 	color: #cdd6f4;
 }




 #sk_tabs.vertical div.sk_tab_hint {
     position: inherit;
     left: 8pt;
     margin-top: 3px;
     /* Surface1 */
     border: solid 1px #45475a;
     /* Red */
     color:#f38ba8;
     background: initial;
     /* Surface0 */
     background-color: #313244;
     font-family: Maple Mono Freeze;
     box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
 }


 #sk_tabs.vertical div.sk_tab_wrap {
 	display: inline-block;
 	margin-left: 0pt;
 	margin-top: 0px;
 	padding-left: 15px;
 }


 #sk_tabs.vertical div.sk_tab_title {
 	min-width: 100pt;
 	max-width: 20vw;
 }


 #sk_usage, #sk_popup, #sk_editor {
 	overflow: auto;
 	position: fixed;
 	width: 80%;
 	max-height: 80%;
 	top: 10%;
 	left: 10%;
 	text-align: left;
 	box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
 	z-index: 2147483298;
 	padding: 1rem;
 	/* Base */
 	border: 1px solid #1e1e2e;
 	border-radius: 10px;
 }


 #sk_keystroke {
 	padding: 6px;
 	position: fixed;
 	float: right;
 	bottom: 0px;
 	z-index: 2147483000;
 	right: 0px;
 	/* Base */
 	background: #1e1e2e;
 	/* Text */
 	color: #cdd6f4;
 	/* Mantle */
 	border: 1px solid #181825;
 	border-radius: 10px;
 	margin-bottom: 1rem;
 	margin-right: 1rem;
 	box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
 }


 #sk_status {
 	position: fixed;
 	/* top: 0; */
 	bottom: 0;
 	right: 39%;
 	z-index: 2147483000;
 	padding: 8px 8px 4px 8px;
 	border-radius: 5px;
 	/* Base */
 	border: 1px solid #1e1e2e;
 	font-size: 12px;
 	box-shadow: 0px 20px 40px 2px rgba(0, 0, 0, 1);
 	/* margin-bottom: 1rem; */
 	width: 20%;
 	margin-bottom: 1rem;
 }



 #sk_omnibarSearchArea {
     /* Base */
     border-bottom: 0px solid #1e1e2e;
 }



 #sk_omnibarSearchArea .resultPage {
 	display: inline-block;
     font-size: 12pt;
     font-style: italic;
 	width: auto;
 }


 #sk_omnibarSearchResult li div.url {
 	font-weight: normal;
 	white-space: nowrap;
 	/* Subtext0 */
 	color: #a6adc8;
 }


 .sk_theme .omnibar_highlight {
 	/* Green */
 	color: #a6e3a1;
 	font-weight: bold;
 }


 .sk_theme .omnibar_folder {
 	/* Teal */
 	border: 1px solid #94e2d5;
 	border-radius: 5px;
 	/* Teal */
 	background: #94e2d5;
 	/* Subtext0 */
 	color: #a6adc8;
 	box-shadow: 1px 1px 5px rgba(0, 8, 8, 1);
 }

 .sk_theme .omnibar_timestamp {
 	/* Pink */
 	background: #f5c2e7;
 	/* Pink */
 	border: 1px solid #f5c2e7;
 	border-radius: 5px;
 	/* Subtext0 */
 	color: #a6adc8;
 	box-shadow: 1px 1px 5px rgb(0, 8, 8);
 }

 #sk_omnibarSearchResult li div.title {
 	text-align: left;
 	max-width: 100%;
 	white-space: nowrap;
 	overflow: auto;
 }


 .sk_theme .separator {
 	/* Base */
 	color: #1e1e2e;
 }


 .sk_theme .prompt{
 	/* Subtext0 */
 	color: #a6adc8;
 	/* Mantle */
 	background-color: #181825;
 	border-radius: 10px;
 	padding-left: 22px;
 	padding-right: 21px;
 	/* padding: ; */
 	font-weight: bold;
 	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
 }




 #sk_status, #sk_find {
 	font-size: 10pt;
 	font-weight: bold;
     text-align: center;
     padding-right: 8px;
 }



 #sk_status span[style*="border-right: 1px solid rgb(153, 153, 153);"] {
     display: none;
 }
 `;

const catppuccinMochaTheme2 = `
:root {
    /* Catppuccin Mocha colors */
    --theme-ace-bg: #1e1e2eab;
    --theme-ace-bg-accent: #313244;
    --theme-ace-fg: #cdd6f4;
    --theme-ace-fg-accent: #a6adc8;
    --theme-ace-cursor: #f5e0dc;
    --theme-ace-select: #89b4fa;
}
#sk_editor {
    height: 50% !important;
    background: var(--theme-ace-bg) !important;
}
.ace_dialog-bottom{
    border-top: 1px solid var(--theme-ace-bg) !important;
}
.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
    background: var(--theme-ace-bg-accent) !important;
}
.ace-chrome{
    color: var(--theme-ace-fg) !important;
}
.ace_gutter, .ace_dialog {
    color: var(--theme-ace-fg-accent) !important;
}
.ace_cursor{
    color: var(--theme-ace-cursor) !important;
}
.normal-mode .ace_cursor{
    background-color: var(--theme-ace-cursor) !important;
    border: var(--theme-ace-cursor) !important;
}
.ace_marker-layer .ace_selection {
    background: var(--theme-ace-select) !important;
}


.sk_theme {
    background: #1e1e2e;
    color: #cdd6f4;
}

.sk_theme input {
    color: #cdd6f4;
}

.sk_theme .url {
    color: #74c7ec;
}

.sk_theme .annotation {
    color: #cba6f7;
}

.sk_theme kbd {
    background: #585b70;
    color: #cdd6f4;
}

.sk_theme .frame {
    background: rgba(180, 191, 254, 0.62);
}

.sk_theme .omnibar_highlight {
    color: #a6e3a1;
}

.sk_theme .omnibar_folder {
    color: #89b4fa;
}

.sk_theme .omnibar_timestamp {
    color: #f5c2e7;
}

.sk_theme .omnibar_visitcount {
    color: #89b4fa;
}

.sk_theme .prompt, .sk_theme .resultPage {
    color: #a6adc8;
}

.sk_theme .feature_name {
    color: #fab387;
}

.sk_theme .separator {
    color: #f9e2af;
}


body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
}

#sk_omnibar {
    overflow: hidden;
    position: fixed;
    width: 80%;
    max-height: 100vh;
    left: 10%;
    text-align: left;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    z-index: 2147483000;
}

.sk_omnibar_middle {
    top: 10%;
    border-radius: 4px;
}

.sk_omnibar_bottom {
    bottom: 0;
    border-radius: 4px 4px 0px 0px;
}

#sk_omnibar span.omnibar_highlight {
    text-shadow: 0 0 0.01em;
}

#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    display: inline-block;
    font-size: 20px;
    width: auto;
}

#sk_omnibarSearchArea>input {
    display: inline-block;
    width: 100%;
    flex: 1;
    font-size: 20px;
    margin-bottom: 0;
    padding: 0px 0px 0px 0.5rem;
    background: transparent;
    border-style: none;
    outline: none;
}

#sk_omnibarSearchArea {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #45475a;
}

.sk_omnibar_middle #sk_omnibarSearchArea {
    margin: 0.5rem 1rem;
}

.sk_omnibar_bottom #sk_omnibarSearchArea {
    margin: 0.2rem 1rem;
}

.sk_omnibar_middle #sk_omnibarSearchResult>ul {
    margin-top: 0;
}

.sk_omnibar_bottom #sk_omnibarSearchResult>ul {
    margin-bottom: 0;
}

#sk_omnibarSearchResult {
    max-height: 60vh;
    overflow: hidden;
    margin: 0rem 0.6rem;
}

#sk_omnibarSearchResult.llmChat {
    overflow: auto;
    max-height: 90vh;
    scrollbar-width: thin;
}

#sk_omnibarSearchResult:empty {
    display: none;
}

#sk_omnibarSearchResult.llmChat>h4 {
    background-color: #a6e3a1;
    border-radius: 4px;
    padding: 4px;
    position: absolute;
    right: 30px;
}

#sk_omnibarSearchResult>ul {
    padding: 0;
}

#sk_omnibarSearchResult>ul>li {
    padding: 0.2rem 0rem;
    display: flex;
    align-items: center;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
}

#sk_omnibarSearchResult.llmChat>ul>li {
    max-height: max-content;
}

#sk_omnibarSearchResult.llmChat>ul>li:before {
    font-size: 20px;
    padding: 5px;
}

#sk_omnibarSearchResult.llmChat>ul>li.role-user:before {
    content: var(--llm-user-icon, '🐝');
}

#sk_omnibarSearchResult.llmChat>ul>li.role-assistant:before {
    content: var(--llm-assistant-icon, '👩‍🎓');
}

#sk_omnibarSearchResult.llmChat>ul>li.role-surfingkeys:before {
    content: var(--llm-assistant-icon, 'ℹ︎');
}

.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #1e1e2e;
}

.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #313244;
}

.sk_theme #sk_omnibarSearchResult>ul>li.window {
    border: 2px solid #585b7073;
    border-radius: 8px;
    margin: 4px 0px;
}

.sk_theme #sk_omnibarSearchResult>ul>li.window.focused {
    border: 2px solid #cdd6f4;
}

.sk_theme div.table {
    display: table;
}

.sk_theme div.table>* {
    vertical-align: middle;
    display: table-cell;
}

#sk_omnibarSearchResult li .icon {
    margin-right: 0.5rem;
    width: 16px;
}

#sk_omnibarSearchResult li div.title {
    text-align: left;
}

#sk_omnibarSearchResult li div.url {
    font-weight: bold;
    white-space: nowrap;
}

#sk_omnibarSearchResult li.focused div.url {
    white-space: normal;
}

#sk_omnibarSearchResult li span.annotation {
    float: right;
}

#sk_omnibarSearchResult .tab_in_window {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 88%);
}

#sk_omnibarSearchResult.commands>ul>li {
    justify-content: space-between;
}

#sk_status {
    position: fixed;
    bottom: 0;
    right: 20%;
    z-index: 2147483000;
    padding: 4px 8px 0 8px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #45475a;
    font-size: 12px;
}

#sk_status>span {
    line-height: 16px;
}

.expandRichHints span.annotation {
    padding-left: 4px;
    color: #89dceb;
}

.expandRichHints .kbd-span {
    min-width: 30px;
    text-align: right;
    display: inline-block;
}

.expandRichHints kbd>.candidates {
    color: #f38ba8;
    font-weight: bold;
}

.expandRichHints kbd {
    padding: 1px 2px;
}

#sk_find {
    border-style: none;
    outline: none;
}

#sk_keystroke {
    padding: 6px;
    position: fixed;
    float: right;
    bottom: 0px;
    z-index: 2147483000;
    right: 0px;
    background: #11111b;
    color: #cdd6f4;
}

#sk_usage, #sk_popup, #sk_editor {
    overflow: auto;
    position: fixed;
    width: 80%;
    max-height: 80%;
    top: 10%;
    left: 10%;
    text-align: left;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    z-index: 2147483298;
    padding: 1rem;
}

#sk_nvim {
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 30%;
}

#sk_popup img {
    width: 100%;
}

#sk_usage>div {
    display: inline-block;
    vertical-align: top;
}

#sk_usage .kbd-span {
    width: 80px;
    text-align: right;
    display: inline-block;
}

#sk_usage .feature_name {
    text-align: center;
    padding-bottom: 4px;
}

#sk_usage .feature_name>span {
    border-bottom: 2px solid #585b70;
}

#sk_usage span.annotation {
    padding-left: 32px;
    line-height: 22px;
}

#sk_usage * {
    font-size: 10pt;
}

kbd {
    white-space: nowrap;
    display: inline-block;
    padding: 3px 5px;
    font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    vertical-align: middle;
    border: solid 1px #45475a;
    border-bottom-color: #313244;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #313244;
}

#sk_banner {
    padding: 0.5rem;
    position: fixed;
    left: 10%;
    top: -3rem;
    z-index: 2147483000;
    width: 80%;
    border-radius: 0px 0px 4px 4px;
    border: 1px solid #f9e2af;
    border-top-style: none;
    text-align: center;
    background: #f9e2af;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

#sk_tabs {
    position: fixed;
    top: 0;
    left: 0;
    background: #11111b85;
    overflow: auto;
    z-index: 2147483000;
}

#sk_tabs.horizontal {
    width: 100%;
}

#sk_tabs.horizontal div.sk_tab {
    display: inline-grid;
}

#sk_tabs.horizontal div.sk_tab_hint {
    float:right;
}

#sk_tabs.vertical div.sk_tab_title {
    min-width: 100pt;
    max-width: 60vw;
}

#sk_tabs.vertical div.sk_tab_hint {
    position: fixed;
    left: 80pt;
}

div.tab_rocket {
    margin: 6px;
    display: inline-block;
    padding: 0px 2px 0px 2px;
    opacity: 0;
}

#sk_tabs.inline div.sk_tab {
    display: inline-block;
}

div.tab_rocket {
    margin: 6px;
    display: inline-block;
    padding: 0px 2px 0px 2px;
    opacity: 0;
}

div.sk_tab {
    vertical-align: bottom;
    justify-items: center;
    border-radius: 3px;
    margin: 1px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a6adc8), color-stop(100%,#cdd6f4));
    box-shadow: 0px 3px 7px 0px rgba(249, 226, 175, 0.3);
    padding-top: 2px;
    border-top: solid 1px #11111b;
}

div.sk_tab_wrap {
    display: inline-block;
}

div.sk_tab_icon {
    display: inline-block;
    padding-left: 1px;
    vertical-align: middle;
}

div.sk_tab_icon>img {
    width: 18px;
}

div.sk_tab_title {
    display: inline-block;
    vertical-align: middle;
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 5px;
    color: #cdd6f4;
}

div.sk_tab_url {
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #a6adc8;
}

div.sk_tab_hint {
    display: inline-block;
    font-size: 10pt;
    font-weight: bold;
    padding: 0px 2px 0px 2px;
    margin: 6px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f9e2af), color-stop(100%,#fab387));
    color: #11111b;
    border: solid 1px #e64553;
    border-radius: 3px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
}

div.sk_tab_group {
    font-size: large;
    color: #cdd6f4;
    padding: 4px;
    border: 1px solid #45475a;
    border-radius: 6px;
    margin: 10px;
    display: inline-block;
    background: #11111b;
}

div.sk_tab_group_header {
    display: flex;
    justify-content: space-between;
}

div.sk_tab_group_header>div {
    display: inline-flex;
}

#sk_bubble {
    position: absolute;
    padding: 9px;
    border: 1px solid #45475a;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    color: #cdd6f4;
    background-color: #d9e0ee;
    z-index: 2147483000;
    font-size: 14px;
}

#sk_bubble .sk_bubble_content {
    overflow-y: scroll;
    background-size: 3px 100%;
    background-position: 100%;
    background-repeat: no-repeat;
}

.sk_scroller_indicator_top {
    background-image: linear-gradient(rgb(0, 0, 0), transparent);
}

.sk_scroller_indicator_middle {
    background-image: linear-gradient(transparent, rgb(0, 0, 0), transparent);
}

.sk_scroller_indicator_bottom {
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
}

#sk_bubble * {
    color: #11111b !important;
}

div.sk_arrow>div:nth-of-type(1) {
    left: 0;
    position: absolute;
    width: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    background: transparent;
}

div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid #45475a;
}

div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid #45475a;
}

div.sk_arrow>div:nth-of-type(2) {
    left: 2px;
    position: absolute;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    background: transparent;
}

div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid #d9e0ee;
}

div.sk_arrow[dir=up]>div:nth-of-type(2) {
    top: 2px;
    border-bottom: 10px solid #d9e0ee;
}

.ace_editor.ace_autocomplete {
    z-index: 2147483300 !important;
    width: 80% !important;
}

@media only screen and (max-width: 767px) {
    #sk_omnibar {
        width: 100%;
        left: 0;
    }
    #sk_omnibarSearchResult {
        max-height: 50vh;
        overflow: scroll;
    }
    .sk_omnibar_bottom #sk_omnibarSearchArea {
        margin: 0;
        padding: 0.2rem;
    }
}
`;
export default catppuccinMochaTheme;
