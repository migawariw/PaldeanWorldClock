// パルデア地方の時刻を計算する関数
function calculatePaldeaTime(hh, mm, ss) {
	const totalSeconds = (hh * 3600) + (mm * 60) + ss; // 入力時刻を秒に変換
	const paldeaSeconds = totalSeconds; // パルデア時間に変換

	const paldeaHours = Math.floor(paldeaSeconds / 3600); // 時間
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

let updateIntervalId = null; // タイマーIDを保持する変数

// パルデア地方の時刻をリアルタイムで更新
function startUpdatingTime(initialHours, initialMinutes, initialSeconds) {
    let totalPaldeaSeconds = (initialHours * 3600) + (initialMinutes * 60) + initialSeconds;

    // 既存のタイマーがある場合はクリア
    if (updateIntervalId !== null) {
        clearInterval(updateIntervalId);
    }

    // 新しいタイマーを開始
    updateIntervalId = setInterval(() => {
        totalPaldeaSeconds += 20; // 現実の1秒ごとにパルデア地方の20秒を進める

        const paldeaHours = Math.floor(totalPaldeaSeconds / 3600) % 24;
        const paldeaMinutes = Math.floor((totalPaldeaSeconds % 3600) / 60);
        const paldeaSeconds = Math.floor(totalPaldeaSeconds % 60);

        displayTimes(paldeaHours, paldeaMinutes, paldeaSeconds);
    }, 1000); // 1秒ごとに実行
}

// 計算ボタンのクリックイベント
document.getElementById("calculateButton").addEventListener("click", () => {
	const hh = Number(document.getElementById("paldeaHoursInput").value) || 0; // 時間を取得
	const mm = Number(document.getElementById("paldeaMinutesInput").value) || 0; // 分を取得
	const ss = 0; // 秒は固定値

	const { hours, minutes, seconds } = calculatePaldeaTime(hh, mm, ss);
	displayTimes(hours, minutes, seconds);
	startUpdatingTime(hours, minutes, seconds); // タイマーを開始
});


// 現在時刻を更新する関数
function updateCurrentTime() {
	const now = new Date();
	const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
	document.getElementById("currentTimeDisplay").textContent = currentTime;
}

// 現在時刻を1秒ごとに更新
setInterval(updateCurrentTime, 1000);
