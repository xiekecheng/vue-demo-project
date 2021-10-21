function mock(app) {
	app.get('/todo/task', function (req, res) {
		const a = []
		for (let i = 0; i < 5; i++) {
			const o = Mock.mock({
				id: '@ID',
				title: '@string("lower",5)',

			})
			a.push(o)

		}
		res.json(a)
	})
}


export default mock