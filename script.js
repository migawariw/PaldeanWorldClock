// let initialTime = null; // 初期時刻を保持する変数
// let updateIntervalId = null; // タイマーIDを保持する変数

// // 現在時刻を表示する関数
// function updateCurrentTime() {
// 	const now = new Date();
// 	const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
// 	document.getElementById("currentTimeDisplay").textContent = currentTime;
// }

// // 時刻を計算する関数
// function calculatePaldeaTime(initialHours, initialMinutes, initialSeconds, elapsedSeconds) {
// 	const totalInitialSeconds = (initialHours * 3600) + (initialMinutes * 60) + initialSeconds;
// 	const paldeaSeconds = totalInitialSeconds + elapsedSeconds * 20; // 20倍速の時間経過を加算

// 	const paldeaHours = Math.floor(paldeaSeconds / 3600) % 24; // 時間
// 	const paldeaMinutes = Math.floor((paldeaSeconds % 3600) / 60); // 分
// 	const paldeaSecondsRemainder = Math.floor(paldeaSeconds % 60); // 秒

// 	return {
// 		hours: paldeaHours,
// 		minutes: paldeaMinutes,
// 		seconds: paldeaSecondsRemainder
// 	};
// }

// // 時刻を表示する関数
// function displayTimes(paldeaHours, paldeaMinutes, paldeaSeconds) {
// 	// パルデア地方
// 	const paldeaTime = `${String(paldeaHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
// 	document.getElementById("paldeaTimeDisplay").textContent = paldeaTime;

// 	// キタカミの里
// 	const kitakamiHours = (paldeaHours + 6) % 24;
// 	const kitakamiTime = `${String(kitakamiHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
// 	document.getElementById("kitakamiTimeDisplay").textContent = kitakamiTime;

// 	// ブルーベリー学園
// 	const blueberryHours = (paldeaHours - 6 + 24) % 24;
// 	const blueberryTime = `${String(blueberryHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
// 	document.getElementById("blueberryTimeDisplay").textContent = blueberryTime;
// }

// // パルデア地方の時刻をリアルタイムで更新
// function startUpdatingTime(initialHours, initialMinutes, initialSeconds) {
// 	// 現在時刻を初期時刻として記録
// 	initialTime = new Date();

// 	// 既存のタイマーがある場合はクリア
// 	if (updateIntervalId !== null) {
// 		clearInterval(updateIntervalId);
// 	}

// 	// 新しいタイマーを開始
// 	updateIntervalId = setInterval(() => {
// 		const now = new Date();
// 		const elapsedSeconds = Math.floor((now - initialTime) / 1000); // 経過時間を秒に変換

// 		const { hours, minutes, seconds } = calculatePaldeaTime(initialHours, initialMinutes, initialSeconds, elapsedSeconds);
// 		displayTimes(hours, minutes, seconds);
// 	}, 1000); // 1秒ごとに実行
// }

// // 計算ボタンのクリックイベント
// // 計算ボタンのクリックイベント
// document.getElementById("calculateButton").addEventListener("click", () => {
// 	const hh = Number(document.getElementById("paldeaHoursInput").value) || 0; // 時間を取得
// 	const mm = Number(document.getElementById("paldeaMinutesInput").value) || 0; // 分を取得
// 	const ss = 0; // 秒は固定値

// 	// 現在時刻を初期時刻として記録
// 	initialTime = new Date();

// 	// 初期時刻をフォーマットして表示
// 	const initialTimeString = `${String(initialTime.getHours()).padStart(2, '0')}:${String(initialTime.getMinutes()).padStart(2, '0')}:${String(initialTime.getSeconds()).padStart(2, '0')}`;
// 	document.getElementById("initialTimeDisplay").textContent = initialTimeString;

// 	// 時間の更新を開始
// 	startUpdatingTime(hh, mm, ss);
// });


// // 現在時刻を1秒ごとに更新
// setInterval(updateCurrentTime, 1000);
// 初期時刻を保持する変数
let initialTime = null;
let updateIntervalId = null; // タイマーIDを保持する変数

// 現在時刻を表示する関数
function updateCurrentTime() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    document.getElementById("currentTimeDisplay").textContent = currentTime;
}

// 時刻を計算する関数
function calculatePaldeaTime(initialHours, initialMinutes, initialSeconds, elapsedSeconds) {
    const totalInitialSeconds = (initialHours * 3600) + (initialMinutes * 60) + initialSeconds;
    const paldeaSeconds = totalInitialSeconds + elapsedSeconds * 20; // 20倍速の時間経過を加算

    const paldeaHours = Math.floor(paldeaSeconds / 3600) % 24; // 時間
    const paldeaMinutes = Math.floor((paldeaSeconds % 3600) / 60); // 分
    const paldeaSecondsRemainder = Math.floor(paldeaSeconds % 60); // 秒

    return {
        hours: paldeaHours,
        minutes: paldeaMinutes,
        seconds: paldeaSecondsRemainder
    };
}

// 時刻を表示する関数
function displayTimes(paldeaHours, paldeaMinutes, paldeaSeconds) {
    // パルデア地方
    const paldeaTime = `${String(paldeaHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
    document.getElementById("paldeaTimeDisplay").textContent = paldeaTime;

    // キタカミの里
    const kitakamiHours = (paldeaHours + 6) % 24;
    const kitakamiTime = `${String(kitakamiHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
    document.getElementById("kitakamiTimeDisplay").textContent = kitakamiTime;

    // ブルーベリー学園
    const blueberryHours = (paldeaHours - 6 + 24) % 24;
    const blueberryTime = `${String(blueberryHours).padStart(2, '0')}:${String(paldeaMinutes).padStart(2, '0')}:${String(paldeaSeconds).padStart(2, '0')}`;
    document.getElementById("blueberryTimeDisplay").textContent = blueberryTime;
}

// パルデア地方の時刻をリアルタイムで更新
function startUpdatingTime(initialHours, initialMinutes, initialSeconds) {
    // 現在時刻を初期時刻として記録
    initialTime = new Date();

    // 既存のタイマーがある場合はクリア
    if (updateIntervalId !== null) {
        clearInterval(updateIntervalId);
    }

    // 新しいタイマーを開始
    updateIntervalId = setInterval(() => {
        const now = new Date();
        const elapsedSeconds = Math.floor((now - initialTime) / 1000); // 経過時間を秒に変換

        const { hours, minutes, seconds } = calculatePaldeaTime(initialHours, initialMinutes, initialSeconds, elapsedSeconds);
        displayTimes(hours, minutes, seconds);
    }, 1000); // 1秒ごとに実行
}

// 本体時刻を初期時刻として計算
function calculateInitialTimeFromSystemTime(systemHours, systemMinutes) {
    const totalSystemSeconds = (systemHours * 3600) + (systemMinutes * 60);
    const remainderSeconds = totalSystemSeconds % (72 * 60); // 72分で割った余りを秒に変換
    const paldeaInitialSeconds = remainderSeconds * 20; // 20倍速換算

    const initialHours = Math.floor(paldeaInitialSeconds / 3600) % 24;
    const initialMinutes = Math.floor((paldeaInitialSeconds % 3600) / 60);
    const initialSeconds = Math.floor(paldeaInitialSeconds % 60);

    return { initialHours, initialMinutes, initialSeconds };
}

// 計算ボタンのクリックイベント
document.getElementById("calculateButton").addEventListener("click", () => {
    const hh = Number(document.getElementById("paldeaHoursInput").value) || 0; // 時間を取得
    const mm = Number(document.getElementById("paldeaMinutesInput").value) || 0; // 分を取得
    const ss = 0; // 秒は固定値

    // 現在時刻を初期時刻として記録
    initialTime = new Date();

    // 初期時刻をフォーマットして表示
    const initialTimeString = `${String(initialTime.getHours()).padStart(2, '0')}:${String(initialTime.getMinutes()).padStart(2, '0')}:${String(initialTime.getSeconds()).padStart(2, '0')}`;
    document.getElementById("initialTimeDisplay").textContent = initialTimeString;

    // 時間の更新を開始
    startUpdatingTime(hh, mm, ss);
});

// 本体時刻入力ボタンのクリックイベント
document.getElementById("systemTimeButton").addEventListener("click", () => {
    const systemHours = Number(document.getElementById("systemHoursInput").value) || 0; // 本体時刻の時間
    const systemMinutes = Number(document.getElementById("systemMinutesInput").value) || 0; // 本体時刻の分

    // 本体時刻を基に初期時刻を計算
    const { initialHours, initialMinutes, initialSeconds } = calculateInitialTimeFromSystemTime(systemHours, systemMinutes);
// 現在時刻を初期時刻として記録
initialTime = new Date();
    // 初期時刻をフォーマットして表示
    // const initialTimeString = `${String(initialHours).padStart(2, '0')}:${String(initialMinutes).padStart(2, '0')}:${String(initialSeconds).padStart(2, '0')}`;
    // document.getElementById("initialTimeDisplay").textContent = initialTimeString;
		// 初期時刻をフォーマットして表示
    const initialTimeString = `${String(initialTime.getHours()).padStart(2, '0')}:${String(initialTime.getMinutes()).padStart(2, '0')}:${String(initialTime.getSeconds()).padStart(2, '0')}`;
    document.getElementById("initialTimeDisplay").textContent = initialTimeString;

    // 時間の更新を開始
    startUpdatingTime(initialHours, initialMinutes, initialSeconds);
});

// 現在時刻を1秒ごとに更新
setInterval(updateCurrentTime, 1000);
