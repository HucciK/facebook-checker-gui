// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;
use tauri::api::process::{Command, CommandEvent};


fn main() {
    let mut bin = "./bin/cmd-x86_64-pc-windows-msvc.exe";
    if env::consts::OS == "macos" {
       bin = "./bin/cmd-aarch64-apple-darwin";
    }

    println!("{}", bin);
    tauri::async_runtime::spawn(async move {
      let (mut rx, mut child) = Command::new(bin)
        .spawn()
        .expect("Failed to spawn cargo");
    });

    tauri::Builder::default()
        .plugin(tauri_plugin_websocket::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

