export default function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Ara..." />
            <br/>
            <label>
                <input type="checkbox" />
                {' '}
                Sadece stokta olan ürünleri göster
            </label>
        </form>
    );
}