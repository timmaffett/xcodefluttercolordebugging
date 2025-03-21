// Copyright (c) 2025 Tim Maffett
// License: MIT (see LICENSE file for complete details).
import * as vscode from 'vscode';

export class DartDebugXCodeESCMorphForAnsiColorSupportFactory implements vscode.DebugAdapterTrackerFactory {
	createDebugAdapterTracker(session: vscode.DebugSession): vscode.DebugAdapterTracker | undefined {
		return new DartDebugXCodeESCMorphForAnsiColorSupport();
	}
}

class DartDebugXCodeESCMorphForAnsiColorSupport implements vscode.DebugAdapterTracker {
	onDidSendMessage(message: any): void {
		if (message && message.command === "initialize" && message.type === "response" && message.body && message.body.supportsANSIStyling === undefined) {
			// strictly speaking this may not be necessary because the Flutter/Dark VSCode extensions now set this also,
			// but it can't hurt either.
			message.body.supportsANSIStyling = true;
		} else if (message.type === 'event' && message.event === 'output' && message.body && message.body.output) {
			// If it's a string message then look for `[^ESC]` sequence and change to to a proper ASCII ESC code 27 (\u001B).
			if (typeof message.body.output === 'string') {
				message.body.output = message.body.output.replace(/\[\^ESC\]/g, '\u001B' );//String.fromCharCode(27));
			}
		}
	}
}

export function activate(context: vscode.ExtensionContext) {
	const isMac = process.platform === "darwin";

	if(isMac) {
		const forcedESCMorphForAnsiColors = new DartDebugXCodeESCMorphForAnsiColorSupportFactory();
		context.subscriptions.push(vscode.debug.registerDebugAdapterTrackerFactory("*", forcedESCMorphForAnsiColors));
	}
}

export function deactivate() {}



