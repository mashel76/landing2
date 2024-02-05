const people = [
  {
    name: 'MasHel',
    role: 'Orang',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1182526514915463278/1204019213237227560/avatar.jpg?ex=65d33546&is=65c0c046&hm=61b542d02d8974c30bbe1523c71cc7afd3785f74e8c7bb2ff7967588f4ffe5b0&',
  },
  {
    name: 'MasHel',
    role: 'Orang',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1182526514915463278/1204019213237227560/avatar.jpg?ex=65d33546&is=65c0c046&hm=61b542d02d8974c30bbe1523c71cc7afd3785f74e8c7bb2ff7967588f4ffe5b0&',
  },
  {
    name: 'MasHel',
    role: 'Orang',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1182526514915463278/1204019213237227560/avatar.jpg?ex=65d33546&is=65c0c046&hm=61b542d02d8974c30bbe1523c71cc7afd3785f74e8c7bb2ff7967588f4ffe5b0&',
  },
  {
    name: 'MasHel',
    role: 'Orang',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1182526514915463278/1204019213237227560/avatar.jpg?ex=65d33546&is=65c0c046&hm=61b542d02d8974c30bbe1523c71cc7afd3785f74e8c7bb2ff7967588f4ffe5b0&',
  },
]
function konten4() {
  return (
    <div id="konten4" className='flex h-screen pt-20'>
        <div className='bg-gray-100 w-full flex flex-col gap-5 shadow-xl p-10 rounded-lg'>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-teal-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
        </div>

    </div>
  )
}

export default konten4