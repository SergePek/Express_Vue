let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Google Cloud', status: 'working'},
    {id: '3', name: 'Yandex Cloud', status: 'working'},
    {id: '4', name: 'Microsoft', status: 'pending'}
  ]
  
  const getAll = (req, res) => {
    res.status(200).json(servers)
  }
  
  const create = (req, res) => {
    const newServer = {
      id: Date.now().toString(),
      ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
  }
  
  const remove = (req, res) => {
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({message: 'Server has been removed.'})
  }

  module.exports = {getAll, create, remove}

