export default function Tile (props){
    return(
        <main>
            <div>
                <div>
                    <form>
                        <h2>
                            <label>
                            What would you like to post?
                            </label>
                        </h2>
                            <textarea type="text" name="post" rows="10" cols="30" autoComplete="off" placeholder="Tell everybody how your day was..."></textarea>
                        <button type="submit">
                            Post Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}