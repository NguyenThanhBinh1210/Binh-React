import React from 'react'
import * as S from './searchIremResult.style'

export default function SearchIremResult() {
	return (
		<div>
			<S.SortBar>
				<S.SortBarLabel>Sắp xếp theo</S.SortBarLabel>
				<S.SortByOptions>
					<S.SortByOptionsOption className="active">
						Phổ biến
					</S.SortByOptionsOption>
					<S.SortByOptionsOption>Mới nhất</S.SortByOptionsOption>
					<S.SortByOptionsOption>Bán chạy</S.SortByOptionsOption>
					<S.SortByPrice>
						<option disable value="">
							Giá
						</option>
						<option value="price:asc">Giá thấp đến cao</option>
						<option value="price:desc">Giá cao đến thâps</option>
					</S.SortByPrice>
				</S.SortByOptions>
				<S.MiniPageController>
					<S.MiniPageControllerState>
						<S.MiniPageControllerCurrentState>
							1
						</S.MiniPageControllerCurrentState>
						/<S.MiniPageControllerTotalState>2</S.MiniPageControllerTotalState>
					</S.MiniPageControllerState>
					<S.ButtonControllerPrev>
						<svg
							viewBox="0 0 7 11"
							className="shopee-svg-icon icon-arrow-left-small"
						>
							<path
								d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z"
								fillRule="nonzero"
							/>
						</svg>
					</S.ButtonControllerPrev>
				</S.MiniPageController>
			</S.SortBar>
		</div>
	)
}