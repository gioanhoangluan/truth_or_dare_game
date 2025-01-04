<script lang="ts">
	import { Button, Card, CardBody, Col, Row, Spinner } from '@sveltestrap/sveltestrap';
	import { onMount } from 'svelte';

	// GAME Truth or Dare With Sexual Content
	// make a game with state
	// force players to take turns choosing between truth or dare
	type Player = {
		name: string;
		totalFailures: number;
		lastTurn: string;
		lastQuestion: string;
	};
	type Question = {
		key: string;
		value: string;
		isUsed: boolean;
	};
	type GameState = {
		topic: string;
		players: Player[];
		state: string;
		currentPlayerTurn: number;
		currentQuestion: Question;
		data: {
			truths: Question[];
			dares: Question[];
		};
		isLoading: boolean;
	};

	// check if game is over
	// if game is over, show results
	// if game is not over, show current turn
	let gameState: GameState = {
		topic: 'bold',
		players: [
			{ name: '', totalFailures: 0, lastTurn: 'truth', lastQuestion: '' },
			{ name: '', totalFailures: 0, lastTurn: 'truth', lastQuestion: '' }
		],
		state: 'new',
		currentPlayerTurn: -1,
		currentQuestion: {
			key: '',
			value: '',
			isUsed: false
		},
		data: {
			truths: [],
			dares: []
		},
		isLoading: false
	};

	const topics = ['bold'];
	const boldData: {
		dares: {
			key: string;
			value: string;
		}[];
		truths: {
			key: string;
			value: string;
		}[];
	} = {
		dares: [
			{ key: 'dare_1', value: 'Hôn người kia ở bất kỳ vị trí nào họ muốn trong 30 giây.' },
			{ key: 'dare_2', value: 'Liếm nhẹ lên cổ hoặc tai người kia.' },
			{ key: 'dare_3', value: 'Cởi một món đồ trên người bằng cách gợi cảm nhất có thể.' },
			{ key: 'dare_4', value: 'Nhắm mắt lại và để người kia hôn bất kỳ đâu trên cơ thể bạn.' },
			{
				key: 'dare_5',
				value:
					'Di chuyển bàn tay của bạn đến bất kỳ nơi nào trên cơ thể người kia và giữ nguyên trong 15 giây.'
			},
			{ key: 'dare_6', value: 'Tặng người kia một nụ hôn dài và say đắm, ít nhất 1 phút.' },
			{
				key: 'dare_7',
				value: 'Dùng ngón tay viết một từ gợi cảm lên cơ thể người kia và để họ đoán từ đó.'
			},
			{
				key: 'dare_8',
				value:
					'Hãy để người kia cởi bỏ một món đồ của bạn, nhưng họ phải làm điều đó thật quyến rũ.'
			},
			{ key: 'dare_9', value: 'Để người kia vẽ một trái tim lên lưng bạn bằng đôi môi của họ.' },
			{ key: 'dare_10', value: 'Hôn từ cổ xuống đến vai của người kia một cách chậm rãi.' },
			{
				key: 'dare_11',
				value: 'Cả hai cùng thực hiện một điệu nhảy quyến rũ trong 1 bài hát lãng mạn.'
			},
			{ key: 'dare_12', value: 'Yêu cầu người kia hôn một bộ phận cơ thể mà bạn chọn.' },
			{ key: 'dare_13', value: 'Hãy miêu tả chính xác điều bạn muốn làm với người kia tối nay.' },
			{ key: 'dare_14', value: 'Thực hiện một tư thế yoga gợi cảm cùng người kia.' },
			{
				key: 'dare_15',
				value: "Hãy chạm vào 'cậu bé/cô bé' của người kia qua lớp quần áo trong 10 giây."
			},
			{ key: 'dare_16', value: 'Hôn vùng bụng dưới của người kia mà không chạm vào khu vực khác.' },
			{
				key: 'dare_17',
				value: 'Để người kia dùng tay mơn trớn vùng đùi trong của bạn trong 20 giây.'
			},
			{
				key: 'dare_18',
				value: 'Cởi bỏ một món đồ của người kia một cách quyến rũ, chỉ dùng miệng.'
			},
			{ key: 'dare_19', value: 'Để người kia cởi bỏ một món đồ lót của bạn mà không dùng tay.' },
			{
				key: 'dare_20',
				value: "Hôn lên 'cậu bé/cô bé' qua lớp quần áo của người kia trong 5 giây."
			},
			{ key: 'dare_21', value: 'Nhẹ nhàng cắn môi dưới của người kia và nhìn vào mắt họ.' },
			{ key: 'dare_22', value: 'Ngồi lên người kia và tạo dáng gợi cảm trong 15 giây.' },
			{
				key: 'dare_23',
				value: 'Thực hiện động tác mát-xa vùng vai và cổ của người kia, sau đó hôn nhẹ lên cổ.'
			},
			{
				key: 'dare_24',
				value: "Giả vờ làm 'trò chơi cấm' trong 30 giây (nhưng không thực sự làm)."
			},
			{ key: 'dare_25', value: 'Để người kia đặt tay lên vùng nhạy cảm của bạn trong 10 giây.' },
			{ key: 'dare_26', value: 'Hãy thủ dâm trước mặt người kia trong 20 giây.' },
			{ key: 'dare_27', value: 'Kích thích cậu bé/cô bé của người kia khi họ đang đứng.' },
			{ key: 'dare_28', value: 'Kích thích cậu bé/cô bé của nhau cùng lúc.' }
		],
		truths: [
			{ key: 'truth_1', value: 'Điều gì là điều táo bạo nhất bạn từng làm vì tình yêu?' },
			{
				key: 'truth_2',
				value: 'Bạn có bao giờ nghĩ đến ai đó khác khi đang ở bên người yêu hiện tại không?'
			},
			{ key: 'truth_3', value: 'Điều gì là bí mật lớn nhất mà bạn chưa bao giờ nói với ai?' },
			{
				key: 'truth_4',
				value: 'Bạn có từng giả vờ thích một món quà từ người yêu mà thực tế không thích không?'
			},
			{
				key: 'truth_5',
				value: 'Lần gần nhất bạn cảm thấy ngại ngùng trước mặt người yêu là khi nào?'
			},
			{ key: 'truth_6', value: 'Bạn có bao giờ nói dối người yêu về điều gì quan trọng không?' },
			{ key: 'truth_7', value: 'Điều gì khiến bạn cảm thấy hấp dẫn nhất ở người yêu của mình?' },
			{
				key: 'truth_8',
				value: 'Bạn có từng cảm thấy ghen với ai đó mà người yêu bạn quan tâm không?'
			},
			{
				key: 'truth_9',
				value: 'Hãy chia sẻ một lần bạn bị thu hút bởi người mà bạn không nên thích.'
			},
			{
				key: 'truth_10',
				value: 'Bạn có từng đọc trộm tin nhắn hoặc kiểm tra điện thoại của người yêu không?'
			},
			{ key: 'truth_11', value: 'Bạn thích điểm gì nhất ở người yêu hiện tại của mình?' },
			{
				key: 'truth_12',
				value: 'Nếu có thể thay đổi một điều về mối quan hệ hiện tại, bạn sẽ thay đổi gì?'
			},
			{ key: 'truth_13', value: 'Điều lãng mạn nhất bạn từng làm cho người yêu là gì?' },
			{ key: 'truth_14', value: 'Bạn có từng mơ về một người khác ngoài người yêu không?' },
			{
				key: 'truth_15',
				value: "Bạn đã bao giờ nói 'Anh/Em yêu Anh/Em' mà không thực sự cảm nhận điều đó chưa?"
			},
			{ key: 'truth_16', value: 'Điều kỳ lạ nhất bạn từng làm khi ở một mình là gì?' },
			{ key: 'truth_17', value: 'Nếu phải chọn giữa tình yêu và sự nghiệp, bạn sẽ chọn gì?' },
			{
				key: 'truth_18',
				value: "Bạn thích điều gì nhất khi người yêu chạm vào 'cậu bé/cô bé' của bạn?"
			},
			{
				key: 'truth_19',
				value: "Lần gần đây nhất bạn cảm thấy 'hưng phấn' khi ở cạnh người yêu là khi nào?"
			},
			{ key: 'truth_20', value: 'Bạn có từng giả vờ lên đỉnh chưa? Nếu có, tại sao?' },
			{ key: 'truth_21', value: "Điều gì khiến bạn cảm thấy 'gợi cảm' nhất ở cơ thể mình?" },
			{
				key: 'truth_22',
				value: 'Bạn đã từng thử điều gì táo bạo trong phòng ngủ chưa? Hãy kể chi tiết.'
			},
			{ key: 'truth_23', value: 'Bạn thích làm điều gì táo bạo nhất với người yêu?' },
			{ key: 'truth_24', value: 'Bạn có thích thử một vị trí mới lạ không? Nếu có, đó là gì?' },
			{
				key: 'truth_25',
				value: 'Bạn có từng nghĩ về người yêu theo cách táo bạo khi họ không ở gần không?'
			},
			{ key: 'truth_26', value: "Bạn thích 'cậu bé/cô bé' của người yêu như thế nào nhất?" },
			{
				key: 'truth_27',
				value: 'Lần gần đây nhất bạn thử điều gì mới lạ với người yêu là khi nào?'
			},
			{
				key: 'truth_28',
				value: 'Hãy miêu tả lần bạn cảm thấy ngại ngùng nhất khi thân mật với người yêu.'
			},
			{ key: 'truth_29', value: 'Bạn thích nhất khi người yêu chạm vào vùng nào trên cơ thể bạn?' },
			{
				key: 'truth_30',
				value: 'Bạn đã từng xem nội dung táo bạo để học hỏi chưa? Nếu có, điều gì ấn tượng nhất?'
			},
			{
				key: 'truth_31',
				value: 'Bạn có muốn thử điều gì táo bạo mà chưa bao giờ dám nói với người yêu?'
			},
			{
				key: 'truth_32',
				value:
					'Bạn có thích những lời khen táo bạo từ người yêu không? Nếu có, hãy chia sẻ một câu.'
			}
		]
	};

	onMount(() => {
		// check game state in localstorage and update game state
		let lastGameData = localStorage.getItem('gameData');
		if (lastGameData) {
			gameState = JSON.parse(lastGameData);
		}
	});

	function startGame() {
		if (gameState.state === 'new') {
			// save game state to localstorage
			gameState.state = 'who-first';
			localStorage.setItem('gameData', JSON.stringify(gameState));
		} else if (gameState.state === 'who-first') {
			gameState.state = 'truth-or-dare';
		} else if (gameState.state === 'truth-or-dare') {
			// set question
			gameState.topic = 'bold';
			switch (gameState.topic) {
				case 'bold':
					gameState.data.dares = boldData.dares.map((item) => {
						return { ...item, isUsed: false };
					});
					gameState.data.truths = boldData.truths.map((item) => {
						return { ...item, isUsed: false };
					});
					break;
				default:
					break;
			}
			nextQuestion(true);

			gameState.state = 'question';
			// save game state to localstorage
			localStorage.setItem('gameData', JSON.stringify(gameState));
		}
	}

	function nextQuestion(isStartGame = false) {
		gameState.isLoading = true;
		let currentPlayerTurn = gameState.currentPlayerTurn;
		if (!isStartGame) {
			currentPlayerTurn = gameState.currentPlayerTurn == 0 ? 1 : 0;
		}
		let currentTurn = gameState.players[currentPlayerTurn]?.lastTurn;
		let key = currentTurn === 'truth' ? findNextTruthQuestion() : findNextDareQuestion();
		if (key === '') {
			// if there is no more truth question, switch to dare question
			key = currentTurn === 'truth' ? findNextDareQuestion() : findNextTruthQuestion();
			if (key === '') {
				// game over
				gameState.state = 'game-over';
			}
			currentTurn = currentTurn === 'truth' ? 'dare' : 'truth';
		}
		gameState.players[currentPlayerTurn].lastTurn = currentTurn === 'truth' ? 'dare' : 'truth'; // switch turn
		gameState.players[currentPlayerTurn].lastQuestion = key;
		gameState.currentPlayerTurn = currentPlayerTurn;
		const tmpQ = findQuestion(currentTurn, key);
		if (tmpQ) {
			gameState.currentQuestion = tmpQ;
			// make question to used
			let questionData = gameState.data[currentTurn === 'truth' ? 'truths' : 'dares'];
			let questionIndex = questionData.findIndex((item) => item.key === key);
			if (questionIndex !== -1) {
				questionData[questionIndex].isUsed = true;
			}
		} else {
			// game over
			gameState.state = 'game-over';
		}

		setTimeout(() => {
			gameState.isLoading = false;
			localStorage.setItem('gameData', JSON.stringify(gameState));
		}, 500);
	}

	function setTurnToPlayer(turn = 'truth') {
		if (gameState.currentPlayerTurn === -1 || gameState.players.length < 1) return;
		// set another player turn
		gameState.players[0].lastTurn = turn;
		gameState.players[1].lastTurn = turn;
	}

	const findNextTruthQuestion = (): string => {
		let unusedTruths = gameState.data.truths.filter((item) => !item.isUsed);
		if (unusedTruths.length < 1) {
			return '';
		}

		let randomIndex = Math.floor(Math.random() * unusedTruths.length);
		let randomQuestion = unusedTruths[randomIndex];
		return randomQuestion.key;
	};

	function findNextDareQuestion() {
		let unusedDares = gameState.data.dares.filter((item) => !item.isUsed);
		if (unusedDares.length < 1) {
			return '';
		}

		let randomIndex = Math.floor(Math.random() * unusedDares.length);
		let randomQuestion = unusedDares[randomIndex];
		return randomQuestion.key;
	}

	function findQuestion(turn = 'truth', key = '') {
		if (turn === 'truth') {
			return gameState.data.truths.find((item) => item.key === key);
		} else {
			return gameState.data.dares.find((item) => item.key === key);
		}
	}

	const resetGame = () => {
		gameState = {
			topic: 'bold',
			players: [
				{ name: '', totalFailures: 0, lastTurn: 'truth', lastQuestion: '' },
				{ name: '', totalFailures: 0, lastTurn: 'truth', lastQuestion: '' }
			],
			state: 'new',
			currentPlayerTurn: -1,
			currentQuestion: {
				key: '',
				value: '',
				isUsed: false
			},
			data: {
				truths: [],
				dares: []
			},
			isLoading: false
		};

		localStorage.removeItem('gameData');
	};
</script>

<div id="main-content" class="d-flex justify-content-center">
	<Col lg={6} sm={12} class="">
		<Card class="card-content">
			<CardBody>
				<Row>
					<Col sm={6}></Col>
					<Col sm={6}>
						<!-- svelte-ignore a11y_invalid_attribute -->
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<a href="javascript:void(0);" class="float-end card-button" on:click={resetGame}
							><i class="ti ti-reload"></i></a
						>
					</Col>
				</Row>
				{#if !gameState.state || gameState.state === 'new'}
					<div style="padding-top: 10vh;">
						<div class="d-flex flex-column text-center game-title">
							<span class="truth">Thật</span>
							<span class="or">hay</span>
							<span class="dare">Thách</span>
						</div>

						<div class="mt-4">
							<!-- form to enter player names -->
							<form on:submit|preventDefault={startGame}>
								<div class="row mb-2 align-items-center">
									<div class="col-5 align-self-center">
										<label for="player1" class="form-label fw-bold text-regular">Tên bạn nam</label>
									</div>
									<div class="col">
										<input
											type="text"
											class="form-control"
											id="player1"
											bind:value={gameState.players[0].name}
											required
										/>
									</div>
								</div>

								<div class="row mb-2 align-items-center">
									<div class="col-5 align-self-center">
										<label for="player2" class="form-label fw-bold text-regular">Tên bạn nữ</label>
									</div>
									<div class="col">
										<input
											type="text"
											class="form-control"
											id="player2"
											bind:value={gameState.players[1].name}
											required
										/>
									</div>
								</div>
								<div class="mt-5 text-center">
									<button type="submit" class="btn btn-dark minw-40 text-regular btn-lg shadow"
										>Bắt đầu</button
									>
								</div>
							</form>
						</div>
					</div>
				{:else if gameState.state === 'who-first'}
					<div class="d-flex flex-column text-center game-title">
						<span class="truth">Thật</span>
						<span class="or">hay</span>
						<span class="dare">Thách</span>
					</div>

					<div class="mt-5">
						<div class="row text-center">
							<span class="game-question">Ai sẽ là người chơi đầu tiên?</span>
						</div>
						<div class="row text-center mt-3">
							<div class="mt-3">
								<button
									type="button"
									class="btn btn-dark btn-xxl minw-40 text-regular shadow"
									on:click={() => {
										gameState.currentPlayerTurn = 0;
										startGame();
									}}>{gameState.players[0].name}</button
								>
							</div>
							<div class="mt-3">
								<button
									type="button"
									class="btn btn-dark btn-xxl minw-40 text-regular shadow"
									on:click={() => {
										gameState.currentPlayerTurn = 1;
										startGame();
									}}>{gameState.players[1].name}</button
								>
							</div>
						</div>
					</div>
				{:else if gameState.state === 'truth-or-dare'}
					<div class="" style="padding-top: 10vh;">
						<div class="row text-center mt-3">
							<div class="mt-3">
								<button
									type="button"
									class="btn btn-dark btn-xxl minw-40 text-regular shadow"
									on:click={() => {
										setTurnToPlayer('truth');
										startGame();
									}}>Thật</button
								>
							</div>
							<div class="mt-3">
								<span class="text-regular" style="font-size: 3rem">hay</span>
							</div>
							<div class="mt-3">
								<button
									type="button"
									class="btn btn-dark btn-xxl minw-40 text-regular shadow"
									on:click={() => {
										setTurnToPlayer('dare');
										startGame();
									}}>Thách</button
								>
							</div>
						</div>
					</div>
				{:else if gameState.state === 'question'}
					<!-- add loader -->
					{#if gameState.isLoading}
						<div class=" d-flex justify-content-center" style="padding-top: 10vh;">
							<div class="align-self-center">
								<Spinner type="grow" color="dark" size="xxl" />
							</div>
						</div>
					{:else}
						<div class="">
							<div class="row text-center" style="padding-top: 7vh;">
								<div
									class="text-center text-regular mb-2"
									style="font-size: 3rem; font-weight: 600"
								>
									{gameState.players[gameState.currentPlayerTurn].lastTurn === 'dare'
										? 'Thật'
										: 'Thách'}
								</div>
								<div class="text-center text-regular mb-4" style="font-size: 2rem;">
									Lượt của {gameState.players[gameState.currentPlayerTurn].name}
								</div>
								<span class="game-question" style="font-size: 1.8rem">
									{gameState.currentQuestion.value}
								</span>

								<div class="mt-5">
									<button
										type="button"
										class="btn btn-dark btn-lg minw-40 text-regular shadow"
										on:click={() => {
											nextQuestion();
										}}>Tiếp theo</button
									>
								</div>
							</div>
						</div>
					{/if}
				{:else}
					<div class="row text-center" style="padding-top: 20vh;">
						<span class="game-question"> Kết thúc </span>
						<div class="mt-5">
							<button
								type="button"
								class="btn btn-dark minw-40 text-regular"
								on:click={() => {
									resetGame();
								}}>Bắt đầu lại</button
							>
						</div>
					</div>
				{/if}
			</CardBody>
		</Card>
	</Col>
</div>

<style lang="scss">
	#main-content {
		padding: 10px;
	}

	:global {
		.card-content {
			min-height: 80vh;
			min-width: 95vw;
			border: 0.5rem solid rgb(50, 50, 50);
			background-color: #ffe3e4;
		}
	}

	.text-regular {
		font-family: 'Playpen Sans', serif;
		font-weight: 400;
		font-style: normal;
	}

	.game-title {
		font-family: 'Pacifico', serif;
		font-weight: 400;
		font-style: normal;
		font-size: 50px;
	}
	.game-question {
		font-family: 'Playpen Sans', serif;
		font-weight: 600;
		font-style: normal;
		font-size: 20px;
	}
	.minw-40 {
		min-width: 120px;
	}

	.btn-xxl {
		width: 80%;
		height: 100px;
		font-size: 3rem;
	}

	.card-button {
		text-decoration: none;
		color: black;
	}
</style>
