export type TTestIds =
// Links
  | "link_signin"
  // Tabs Menu
  | "tabmenu_home"
  | "tabmenu_session"
  | "tabmenu_canvas"
  | "tabmenu_cookies"
  | "tabmenu_actions"
  | "tabmenu_email"
  | "tabmenu_timestamp"
  | "tabmenu_trpc"
  | "tabmenu_signout"
  // Input
  | "input_type"
  | "input_blur"
  | "input_clear"
  | "input_submit"
  | "input_select"
  | "input_slider"
  | "input_check"
  // Button
  | "button_click"
  | "button_doubleClick"
  | "button_rightClick"
  | "button_submit"
  // div
  | "div_scroll"
  // Text
  | "text_dashboard"
  | "text_type"
  | "text_blur"
  | "text_clear"
  | "text_submit"
  | "text_click"
  | "text_doubleClick"
  | "text_rightClick"
  | "text_status"
  | "text_select"
  | "text_scroll"
  | "text_slider"
  | "text_check";

export function testId(id: TTestIds): TTestIds {
  return id;
}