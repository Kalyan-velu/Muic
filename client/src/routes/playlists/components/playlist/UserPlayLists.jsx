import React from 'react'
const UserPlayLists = ({ playlists }) => {
    return (
        <>
            {playlists.items?.map((p) => (
                <div key={p.id} className={'playlist__details'}>
                    <div className="playlist__details__img">
                        {(p.images.length === 0) ? null : <img loading={"lazy"} src={p.images[0].url} alt={p.name} />}
                    </div>
                    <div className="playlist__details__name">
                        <p>{p.name}</p>
                    </div>
                </div>
            ))}

        </>

    )
}
export default UserPlayLists